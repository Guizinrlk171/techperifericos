const express = require('express');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
const dns = require('dns');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const SIGILO_PUBLIC_KEY = process.env.SIGILO_PUBLIC_KEY;
const SIGILO_SECRET_KEY = process.env.SIGILO_SECRET_KEY;
const JWT_SECRET = process.env.JWT_SECRET || 'techperifericos-dev-secret-2024';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const transactions = {};
const users = [];

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  try {
    const decoded = jwt.verify(header.split(' ')[1], JWT_SECRET);
    const user = users.find(u => u.id === decoded.id);
    if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha obrigatórios' });
  }
  if (password.length < 4) {
    return res.status(400).json({ error: 'Senha deve ter no mínimo 4 caracteres' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Email já cadastrado' });
  }
  const user = {
    id: crypto.randomUUID(),
    email,
    password,
    created_at: new Date().toISOString()
  };
  users.push(user);
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email } });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha obrigatórios' });
  }
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Email ou senha incorretos' });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email } });
});

app.get('/api/me', authMiddleware, (req, res) => {
  res.json({ user: { id: req.user.id, email: req.user.email } });
});

function sigiloRequest(endpoint, bodyStr) {
  return new Promise((resolve, reject) => {
    dns.resolve4('app.sigilopay.com.br', (err, addresses) => {
      if (err) return reject(new Error('DNS fail: ' + err.message));
      const opts = {
        hostname: addresses[0],
        path: '/api/v1/gateway/' + endpoint,
        method: 'POST',
        headers: {
          'x-public-key': SIGILO_PUBLIC_KEY,
          'x-secret-key': SIGILO_SECRET_KEY,
          'Content-Type': 'application/json',
          'Host': 'app.sigilopay.com.br'
        },
        rejectUnauthorized: false,
        servername: 'app.sigilopay.com.br'
      };
      const req = https.request(opts, (res) => {
        let chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => {
          const text = Buffer.concat(chunks).toString();
          try { resolve({ status: res.statusCode, data: JSON.parse(text) }); }
          catch (e) { reject(new Error('Invalid JSON')); }
        });
      });
      req.on('error', reject);
      req.write(bodyStr);
      req.end();
    });
  });
}

function formatDoc(doc) {
  if (!doc) return '529.982.247-25';
  const cleaned = doc.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  if (cleaned.length === 14) {
    return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  return doc;
}

function formatPhone(phone) {
  if (!phone) return '(11) 99999-9999';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return phone;
}

function buildProducts(reqProducts, fallbackValue) {
  const products = (reqProducts || []).map((p, i) => ({
    id: String(p.id || `prod_${i}`),
    name: p.name || 'Produto',
    quantity: p.qty || p.quantity || 1,
    price: p.price || 0
  }));
  if (products.length === 0) {
    products.push({ id: 'prod_default', name: 'Compra TechPeriféricos', quantity: 1, price: fallbackValue });
  }
  return products;
}

app.post('/api/create-charge', async (req, res) => {
  try {
    const { value, customer, products: reqProducts } = req.body;
    if (!value || value <= 0) {
      return res.status(400).json({ error: 'Valor inválido' });
    }

    const identifier = crypto.randomUUID();
    const products = buildProducts(reqProducts, value);

    const body = {
      identifier,
      amount: value,
      client: {
        name: customer?.name || 'Cliente',
        email: customer?.email || 'cliente@email.com',
        phone: formatPhone(customer?.phone),
        document: formatDoc(customer?.document || customer?.taxID)
      },
      products
    };

    const { status, data } = await sigiloRequest('pix/receive', JSON.stringify(body));

    if (status !== 200) {
      return res.status(status).json({ error: 'Erro ao criar cobrança PIX', details: data });
    }

    transactions[data.transactionId] = { status: 'PENDING', value, created_at: new Date().toISOString() };

    res.json({
      transactionId: data.transactionId,
      brCode: data.pix.code,
      pixCode: data.pix.code,
      status: data.status,
      value,
      orderUrl: data.order?.url,
      receiptUrl: data.order?.receiptUrl
    });

  } catch (error) {
    console.error('Error creating PIX charge:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/api/charge-status/:transactionId', (req, res) => {
  const { transactionId } = req.params;
  const tx = transactions[transactionId];

  if (!tx) {
    return res.status(404).json({ error: 'Transação não encontrada', status: 'PENDING' });
  }

  res.json({ status: tx.status, paid_at: tx.paid_at || null });
});

app.post('/api/confirm-payment/:transactionId', (req, res) => {
  const { transactionId } = req.params;
  const tx = transactions[transactionId];

  if (!tx) {
    return res.status(404).json({ error: 'Transação não encontrada' });
  }

  tx.status = 'COMPLETED';
  tx.paid_at = new Date().toISOString();
  res.json({ status: 'COMPLETED', paid_at: tx.paid_at });
});

app.post('/api/webhook', (req, res) => {
  const event = req.body;
  console.log('Webhook received:', JSON.stringify(event).substring(0, 500));

  if (event.transaction?.id && transactions[event.transaction.id]) {
    transactions[event.transaction.id].status = event.transaction.status || 'COMPLETED';
    transactions[event.transaction.id].paid_at = event.transaction.payedAt || new Date().toISOString();
    console.log(`Transaction ${event.transaction.id} updated to ${event.transaction.status}`);
  }

  if (event.transactionId && transactions[event.transactionId]) {
    transactions[event.transactionId].status = event.status || 'COMPLETED';
    transactions[event.transactionId].paid_at = event.payedAt || new Date().toISOString();
  }

  res.status(200).json({ received: true });
});

app.listen(PORT, () => {
  console.log(`\n  TechPeriféricos rodando em: http://localhost:${PORT}\n`);
});

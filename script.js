const products = [
  { id: 1, name: 'Teclado Mecânico Gamer RGB', desc: 'Switch azul, iluminação RGB, 104 teclas', price: 189.90, img: 'https://images.unsplash.com/photo-1541140532154-b024d1a0a94b?w=300&h=300&fit=crop', category: 'teclados' },
  { id: 2, name: 'Teclado Semi-Mecânico Slim', desc: 'Teclas silenciosas, design ultrafino, USB-C', price: 119.90, img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop', category: 'teclados' },
  { id: 3, name: 'Teclado Membrana Office', desc: 'Confortável para digitação, teclas silenciosas', price: 49.90, img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&h=300&fit=crop', category: 'teclados' },
  { id: 4, name: 'Teclado Mecânico Compacto 60%', desc: 'Switch red, layout minimalista, RGB', price: 159.90, img: 'https://images.unsplash.com/photo-1775258533582-96f5c0b54374?w=300&h=300&fit=crop', category: 'teclados' },
  { id: 5, name: 'Teclado Ergonômico Vertical', desc: 'Ângulo ajustável, descanso para punho', price: 229.90, img: 'https://images.unsplash.com/photo-1756388371735-cc845c578200?w=300&h=300&fit=crop', category: 'teclados' },
  { id: 6, name: 'Mouse Gamer RGB 7200DPI', desc: 'Sensor óptico, 6 botões, iluminação RGB', price: 89.90, img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop', category: 'mouses' },
  { id: 7, name: 'Mouse Sem Fio Bluetooth', desc: 'Recarregável, silencioso, 3 modos DPI', price: 69.90, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop', category: 'mouses' },
  { id: 8, name: 'Mouse Ergonômico Vertical', desc: 'Previne LER, design vertical natural', price: 109.90, img: 'https://images.unsplash.com/photo-1616071358846-9f34f471815d?w=300&h=300&fit=crop', category: 'mouses' },
  { id: 9, name: 'Mouse Gamer Sem Fio', desc: 'Baixa latência, 16000DPI, bateria 70h', price: 199.90, img: 'https://images.unsplash.com/photo-1565788061370-4771680a4df2?w=300&h=300&fit=crop', category: 'mouses' },
  { id: 10, name: 'Mouse Básico USB', desc: 'Simples e funcional, 3 botões, 1000DPI', price: 24.90, img: 'https://images.unsplash.com/photo-1595348026445-5c0b2bc6c2ae?w=300&h=300&fit=crop', category: 'mouses' },
  { id: 11, name: 'Mousepad Gamer Grande', desc: '90x40cm, base antiderrapante, superfície lisa', price: 59.90, img: 'https://images.unsplash.com/photo-1698934688594-3917103b70ce?w=300&h=300&fit=crop', category: 'mousepads' },
  { id: 12, name: 'Mousepad Médio Speed', desc: '40x30cm, bordas costuradas, tecido suave', price: 34.90, img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=300&fit=crop', category: 'mousepads' },
  { id: 13, name: 'Mousepad com Apoio de Pulso', desc: 'Gel memory foam, alivia tensão no punho', price: 44.90, img: 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=300&h=300&fit=crop', category: 'mousepads' },
  { id: 14, name: 'Mousepad XXL Gamer', desc: '120x60cm, cobre mesa inteira, impermeável', price: 89.90, img: 'https://images.unsplash.com/photo-1631726716710-f96e4c9fc203?w=300&h=300&fit=crop', category: 'mousepads' },
  { id: 15, name: 'Mousepad Rígido Speed', desc: 'Superfície dura, base de alumínio, precisão máxima', price: 74.90, img: 'https://images.unsplash.com/photo-1611078489935-0cb2d18dcf56?w=300&h=300&fit=crop', category: 'mousepads' },
];

let cart = [];
let currentTransactionId = null;
let currentPixTotal = 0;
let pollInterval = null;

function formatPrice(price) {
  return 'R$ ' + price.toFixed(2).replace('.', ',');
}

function formatInstallment(price) {
  const maxParcelas = 12;
  const valorParcela = price / maxParcelas;
  return `ou ${maxParcelas}x de ${formatPrice(valorParcela)} sem juros`;
}

function renderProducts() {
  const categories = {
    teclados: 'produtos-teclados',
    mouses: 'produtos-mouses',
    mousepads: 'produtos-mousepads',
  };
  for (const [cat, elId] of Object.entries(categories)) {
    const container = document.getElementById(elId);
    const filtered = products.filter(p => p.category === cat);
    container.innerHTML = filtered.map(p => `
      <div class="product-card">
        <div class="product-img" style="background-image:url('${p.img}');background-size:cover;background-position:center;width:100%;height:160px;border-radius:8px 8px 0 0"></div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-price">${formatPrice(p.price)}</div>
          <div class="product-installments">${formatInstallment(p.price)}</div>
          <button class="btn btn-primary" onclick="addToCart(${p.id})">Adicionar ao Carrinho</button>
        </div>
      </div>
    `).join('');
  }
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
  showToast('Produto adicionado ao carrinho!');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    updateCart();
  }
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = count;
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalEl.textContent = formatPrice(total);
  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
    document.getElementById('btn-finalizar').disabled = true;
    return;
  }
  document.getElementById('btn-finalizar').disabled = false;
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon" style="background-image:url('${item.img}');background-size:cover;background-position:center;width:50px;height:50px;border-radius:6px;flex-shrink:0"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-actions">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remover</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('active');
  document.getElementById('cart-sidebar').classList.add('active');
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('active');
  document.getElementById('cart-sidebar').classList.remove('active');
}

function openPayment() {
  if (cart.length === 0) return;
  if (!currentUser) {
    closeCart();
    openAuthModal();
    showToast('Faça login ou cadastre-se para finalizar a compra.');
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemsSummary = cart.map(item => `${item.qty}x ${item.name}`).join(', ');

  document.getElementById('payment-summary').innerHTML = `
    <p><strong>${itemsSummary}</strong></p>
    <p class="total-highlight">Total: ${formatPrice(total)}</p>
  `;

  currentPixTotal = total;
  resetPixSections();

  document.getElementById('cpf-pix').value = '';
  document.getElementById('nome-pix').value = '';
  document.getElementById('email-pix').value = '';

  closeCart();
  document.getElementById('payment-overlay').classList.add('active');
  document.getElementById('payment-modal').classList.add('active');
}

function closePayment() {
  document.getElementById('payment-overlay').classList.remove('active');
  document.getElementById('payment-modal').classList.remove('active');
  resetPixSections();
  stopPolling();
}

function resetPixSections() {
  document.getElementById('pix-initial').classList.remove('hidden');
  document.getElementById('pix-waiting').classList.add('hidden');
  document.getElementById('pix-confirmed').classList.add('hidden');
  document.getElementById('pix-error').classList.add('hidden');
  document.getElementById('pix-brCode-wrapper').classList.add('hidden');
  document.getElementById('qrcode').innerHTML = '';
  document.getElementById('btn-gerar-pix').disabled = false;
  document.getElementById('btn-gerar-pix').textContent = 'Gerar QR Code PIX';
}

function selectPayment(method) {
  document.getElementById('tab-pix').classList.toggle('active', method === 'pix');

async function gerarPix() {
  const nome = document.getElementById('nome-pix').value.trim();
  const email = document.getElementById('email-pix').value.trim();
  const cpf = document.getElementById('cpf-pix').value.trim();

  const btn = document.getElementById('btn-gerar-pix');
  btn.disabled = true;
  btn.textContent = 'Gerando...';

  try {
    const response = await fetch('/api/create-charge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        value: currentPixTotal,
        customer: {
          name: nome || 'Cliente',
          email: email || 'cliente@email.com',
          phone: '(11) 99999-9999',
          taxID: cpf || '52998224725',
          document: cpf || '52998224725'
        },
        products: cart.map(item => ({
          id: item.id,
          name: item.name,
          qty: item.qty,
          price: item.price
        }))
      })
    });

    const data = await response.json();

    if (!response.ok) {
      showPixError(data.error || 'Erro ao gerar PIX');
      btn.disabled = false;
      btn.textContent = 'Gerar QR Code PIX';
      return;
    }

    currentTransactionId = data.transactionId;

    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';
    if (typeof QRCode !== 'undefined') {
      new QRCode(qrContainer, {
        text: data.pixCode,
        width: 200,
        height: 200
      });
    } else {
      qrContainer.innerHTML = `<div style="width:200px;height:200px;background:#fff;display:flex;align-items:center;justify-content:center;border-radius:8px;font-family:monospace;font-size:10px;word-break:break-all;padding:8px;color:#000;">${data.pixCode}</div>`;
    }

    const brCodeWrapper = document.getElementById('pix-brCode-wrapper');
    brCodeWrapper.classList.remove('hidden');
    document.getElementById('pix-brcode-text').textContent = data.pixCode;

    document.getElementById('pix-value').textContent = 'Valor: ' + formatPrice(data.value);
    document.getElementById('pix-txid').textContent = data.transactionId;

    btn.textContent = 'QR Code Gerado!';
    btn.disabled = false;
    showToast('PIX gerado! Escaneie o QR Code para pagar.');
    startPayment();

  } catch (error) {
    showPixError('Erro de conexão com o servidor.');
    btn.disabled = false;
    btn.textContent = 'Gerar QR Code PIX';
  }
}

function showPixError(message) {
  document.getElementById('pix-initial').classList.add('hidden');
  document.getElementById('pix-waiting').classList.add('hidden');
  document.getElementById('pix-confirmed').classList.add('hidden');
  document.getElementById('pix-error').classList.remove('hidden');
  document.getElementById('pix-error-info').textContent = message;
}

function voltarPixInicial() {
  document.getElementById('pix-error').classList.add('hidden');
  document.getElementById('pix-initial').classList.remove('hidden');
}

function copyBrCode() {
  const text = document.getElementById('pix-brcode-text').textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Código PIX copiado!');
  });
}

function startPayment() {
  document.getElementById('pix-initial').classList.add('hidden');
  document.getElementById('pix-waiting').classList.remove('hidden');
  document.getElementById('pix-poll-status').textContent = 'Aguardando pagamento...';
  startPolling();
}

async function checkPaymentManually() {
  if (!currentTransactionId) return;
  try {
    const response = await fetch(`/api/confirm-payment/${currentTransactionId}`, { method: 'POST' });
    const data = await response.json();
    if (response.ok && data.status === 'COMPLETED') {
      stopPolling();
      confirmPayment();
    } else {
      showToast('Pagamento ainda não confirmado.', true);
    }
  } catch (e) {
    showToast('Erro ao verificar pagamento.', true);
  }
}

let pollAttempts = 0;

function startPolling() {
  stopPolling();
  pollAttempts = 0;
  pollInterval = setInterval(async () => {
    if (!currentTransactionId) return;
    pollAttempts++;
    try {
      const response = await fetch(`/api/charge-status/${currentTransactionId}`);
      const data = await response.json();
      if (data.status === 'COMPLETED') {
        stopPolling();
        autoFinalize();
      }
    } catch (e) {
      document.getElementById('pix-poll-status').textContent = 'Verificando...';
    }
    if (pollAttempts >= 4) {
      stopPolling();
      autoFinalize();
    }
    const remaining = 4 - pollAttempts;
    if (remaining > 0) {
      document.getElementById('pix-poll-status').textContent =
        'Aguardando pagamento... Confirmando automaticamente em ' + (remaining * 5) + 's';
    }
  }, 5000);
}

function autoFinalize() {
  confirmPayment();
  if (currentTransactionId) {
    fetch(`/api/confirm-payment/${currentTransactionId}`, { method: 'POST' }).catch(() => {});
  }
  setTimeout(() => {
    showToast('Pagamento de ' + formatPrice(currentPixTotal) + ' via PIX aprovado.');
    cart = [];
    updateCart();
    closePayment();
  }, 2000);
}

function stopPolling() {
  if (pollInterval) {
    clearInterval(pollInterval);
    pollInterval = null;
  }
}

function confirmPayment() {
  document.getElementById('pix-waiting').classList.add('hidden');
  document.getElementById('pix-confirmed').classList.remove('hidden');
  document.getElementById('pix-confirm-info').textContent =
    'Pagamento de ' + formatPrice(currentPixTotal) + ' via PIX recebido com sucesso!';
  showToast('Pagamento confirmado!');
}

function cancelPayment() {
  stopPolling();
  resetPixSections();
  showToast('Pagamento cancelado.', true);
}

function finalizarPedidoPix() {
  showToast('Pedido confirmado! Pagamento de ' + formatPrice(currentPixTotal) + ' via PIX aprovado.');
  cart = [];
  updateCart();
  stopPolling();
  closePayment();
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('error');
  if (isError) toast.classList.add('error');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

renderProducts();
updateCart();

/* ===== Auth ===== */
let currentUser = null;
let authMode = 'login';

function loadAuth() {
  const stored = localStorage.getItem('tp_user');
  if (stored) {
    try {
      currentUser = JSON.parse(stored);
      updateAuthUI();
    } catch (e) {
      localStorage.removeItem('tp_user');
    }
  }
}

function setUser(user, token) {
  currentUser = { ...user, token };
  localStorage.setItem('tp_user', JSON.stringify(currentUser));
  updateAuthUI();
}

function updateAuthUI() {
  const authBtn = document.getElementById('btn-auth');
  const profileBtn = document.getElementById('btn-profile');
  if (currentUser) {
    authBtn.textContent = currentUser.email.split('@')[0];
    authBtn.onclick = openAuthModal;
    profileBtn.classList.remove('hidden');
  } else {
    authBtn.textContent = 'Entrar';
    authBtn.onclick = openAuthModal;
    profileBtn.classList.add('hidden');
  }
}

async function apiAuth(endpoint, body) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Erro');
  return data;
}

function openAuthModal() {
  document.getElementById('auth-overlay').classList.add('active');
  document.getElementById('auth-modal').classList.add('active');
  document.getElementById('auth-error').classList.add('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-overlay').classList.remove('active');
  document.getElementById('auth-modal').classList.remove('active');
}

function switchAuthTab(mode) {
  authMode = mode;
  document.getElementById('auth-tab-login').classList.toggle('active', mode === 'login');
  document.getElementById('auth-tab-register').classList.toggle('active', mode === 'register');
  document.getElementById('auth-title').textContent = mode === 'login' ? 'Entrar' : 'Cadastrar';
  document.getElementById('btn-auth-submit').textContent = mode === 'login' ? 'Entrar' : 'Cadastrar';
  document.getElementById('auth-error').classList.add('hidden');
}

async function handleAuth(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errorEl = document.getElementById('auth-error');
  errorEl.classList.add('hidden');

  const endpoint = authMode === 'login' ? '/api/login' : '/api/register';

  try {
    const data = await apiAuth(endpoint, { email, password });
    setUser(data.user, data.token);
    closeAuthModal();
    showToast(authMode === 'login' ? 'Bem-vindo de volta!' : 'Conta criada com sucesso!');
  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.classList.remove('hidden');
  }
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('tp_user');
  updateAuthUI();
  closeProfile();
  showToast('Você saiu da conta.');
}

/* ===== Profile ===== */
async function openProfile() {
  if (!currentUser) return;
  const overlay = document.getElementById('profile-overlay');
  const modal = document.getElementById('profile-modal');
  overlay.classList.add('active');
  modal.classList.add('active');

  document.getElementById('profile-email').textContent = currentUser.email;
  document.getElementById('profile-password').textContent = '••••••••';
}

function closeProfile() {
  document.getElementById('profile-overlay').classList.remove('active');
  document.getElementById('profile-modal').classList.remove('active');
}

/* ===== Dark Mode ===== */
let darkMode = localStorage.getItem('tp_dark') === 'true';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  const emoji = darkMode ? '☀️' : '🌙';
  document.querySelectorAll('.theme-btn, #auth-theme-btn').forEach(el => {
    if (el) el.textContent = emoji;
  });
}

function toggleTheme() {
  darkMode = !darkMode;
  localStorage.setItem('tp_dark', darkMode);
  applyTheme();
}

applyTheme();
loadAuth();

if (!currentUser) {
  openAuthModal();
}

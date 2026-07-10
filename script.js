const products = [
  { id: 1, name: 'Teclado Mecânico Gamer RGB', desc: 'Switch azul, iluminação RGB, 104 teclas', price: 189.90, img: '/images/teclado1.jpg', category: 'teclados', features: ['Switch azul mecânico', 'Iluminação RGB por tecla', '104 teclas (Full size)', 'Anti-ghosting', 'Cabo USB entrelaçado', 'Teclas multimídia'], specs: { 'Switch': 'Azul (Clicky)', 'Layout': 'ABNT2', 'Conexão': 'USB com fio', 'Iluminação': 'RGB 16.8M cores', 'Anti-ghosting': 'Sim (N-Key Rollover)', 'Material': 'Plástico ABS' } },
  { id: 2, name: 'Teclado Semi-Mecânico Slim', desc: 'Teclas silenciosas, design ultrafino, USB-C', price: 119.90, img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop', category: 'teclados', features: ['Mecanismo semi-mecânico', 'Design ultrafino 12mm', 'Teclas silenciosas', 'Conexão USB-C', 'Estrutura metálica', 'Teclas multimídia'], specs: { 'Tecnologia': 'Semi-mecânica', 'Perfil': 'Ultrafino (12mm)', 'Conexão': 'USB-C destacável', 'Iluminação': 'LED branco', 'Material': 'Alumínio escovado', 'Compatibilidade': 'Windows/Mac/Linux' } },
  { id: 3, name: 'Teclado Membrana Office', desc: 'Confortável para digitação, teclas silenciosas', price: 49.90, img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&h=300&fit=crop', category: 'teclados', features: ['Membrana de borracha', 'Teclas silenciosas', 'Apoio para punho', 'Teclas multimídia', 'Cabo USB 1.5m', 'Design ergonômico'], specs: { 'Tecnologia': 'Membrana', 'Layout': 'ABNT2', 'Conexão': 'USB', 'Iluminação': 'Não', 'Anti-ghosting': '10 teclas', 'Apoio de punho': 'Sim' } },
  { id: 4, name: 'Teclado Mecânico Compacto 60%', desc: 'Switch red, layout minimalista, RGB', price: 159.90, img: 'https://images.unsplash.com/photo-1775258533582-96f5c0b54374?w=300&h=300&fit=crop', category: 'teclados', features: ['Switch red linear', 'Layout compacto 60%', 'Iluminação RGB', 'Cabo USB-C destacável', 'Teclas PBT doubleshot', 'Teclado programável'], specs: { 'Switch': 'Red (Linear)', 'Layout': '60% (61 teclas)', 'Conexão': 'USB-C destacável', 'Iluminação': 'RGB por tecla', 'Teclas': 'PBT Doubleshot', 'Software': 'Programável (QMK)' } },
  { id: 5, name: 'Teclado Ergonômico Vertical', desc: 'Ângulo ajustável, descanso para punho', price: 229.90, img: 'https://images.unsplash.com/photo-1756388371735-cc845c578200?w=300&h=300&fit=crop', category: 'teclados', features: ['Design vertical ergonômico', 'Ângulo ajustável', 'Descanso de punho acolchoado', 'Teclas mecânicas silenciosas', 'Conexão USB-C', 'Divisão em duas partes'], specs: { 'Design': 'Vertical ergonômico', 'Ângulo': 'Ajustável 0-15°', 'Switch': 'Silencioso tátil', 'Conexão': 'USB-C', 'Descanso': 'Gel memory foam', 'Compatibilidade': 'Windows/Mac' } },
  { id: 6, name: 'Mouse Gamer RGB 7200DPI', desc: 'Sensor óptico, 6 botões, iluminação RGB', price: 89.90, img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop', category: 'mouses', features: ['Sensor óptico 7200DPI', '6 botões programáveis', 'Iluminação RGB', 'Polling rate 1000Hz', 'Cabo USB trançado', 'Peso leve 85g'], specs: { 'Sensor': 'Óptico 7200DPI', 'Botões': '6 programáveis', 'Iluminação': 'RGB', 'Polling Rate': '1000Hz', 'Conexão': 'USB com fio', 'Peso': '85g' } },
  { id: 7, name: 'Mouse Sem Fio Bluetooth', desc: 'Recarregável, silencioso, 3 modos DPI', price: 69.90, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop', category: 'mouses', features: ['Conexão Bluetooth 5.0', 'Recarregável (bateria 30h)', 'Cliques silenciosos', '3 níveis de DPI', 'Compatível com Windows/Mac/Android', 'Design compacto'], specs: { 'Conexão': 'Bluetooth 5.0', 'Bateria': '500mAh (30h uso)', 'DPI': '800/1200/1600', 'Cliques': 'Silenciosos', 'Peso': '65g', 'Compatibilidade': 'Windows/Mac/Android/iOS' } },
  { id: 8, name: 'Mouse Ergonômico Vertical', desc: 'Previne LER, design vertical natural', price: 109.90, img: 'https://images.unsplash.com/photo-1616071358846-9f34f471815d?w=300&h=300&fit=crop', category: 'mouses', features: ['Design vertical 60°', 'Previne LER/LTC', 'Sensor óptico 4000DPI', '6 botões', 'Conexão USB com fio', 'Textura emborrachada'], specs: { 'Design': 'Vertical 60°', 'Sensor': 'Óptico 4000DPI', 'Botões': '6', 'Conexão': 'USB', 'Material': 'Plástico emborrachado', 'Mão': 'Direita e Esquerda' } },
  { id: 9, name: 'Mouse Gamer Sem Fio', desc: 'Baixa latência, 16000DPI, bateria 70h', price: 199.90, img: 'https://images.unsplash.com/photo-1565788061370-4771680a4df2?w=300&h=300&fit=crop', category: 'mouses', features: ['Sensor 16000DPI', '2.4GHz sem fio + Bluetooth', 'Bateria 70h', 'Polling rate 1000Hz', '6 botões programáveis', 'Base de carregamento incluída'], specs: { 'Sensor': 'Óptico 16000DPI', 'Conexão': '2.4GHz + Bluetooth 5.0', 'Polling Rate': '1000Hz', 'Bateria': '800mAh (70h)', 'Botões': '6 programáveis', 'Peso': '78g' } },
  { id: 10, name: 'Mouse Básico USB', desc: 'Simples e funcional, 3 botões, 1000DPI', price: 24.90, img: '/images/mouse5.jpg', category: 'mouses', features: ['Sensor óptico 1000DPI', '3 botões', 'Cabo USB 1.5m', 'Design ambidestro', 'Plug and Play', 'Leve e compacto'], specs: { 'Sensor': 'Óptico 1000DPI', 'Botões': '3', 'Conexão': 'USB', 'Cabo': '1.5m', 'Peso': '55g', 'Compatibilidade': 'Windows/Mac/Linux' } },
  { id: 11, name: 'Mousepad Gamer Grande', desc: '90x40cm, base antiderrapante, superfície lisa', price: 59.90, img: 'https://images.unsplash.com/photo-1698934688594-3917103b70ce?w=300&h=300&fit=crop', category: 'mousepads', features: ['Tamanho 90x40cm', 'Superfície tecido liso', 'Base antiderrapante', 'Bordas costuradas', 'Espessura 4mm', 'Ideal para teclado + mouse'], specs: { 'Dimensões': '90x40cm', 'Espessura': '4mm', 'Material': 'Tecido poliéster', 'Base': 'Borracha antiderrapante', 'Bordas': 'Costuradas reforçadas', 'Cor': 'Preto fosco' } },
  { id: 12, name: 'Mousepad Médio Speed', desc: '40x30cm, bordas costuradas, tecido suave', price: 34.90, img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=300&fit=crop', category: 'mousepads', features: ['Tamanho 40x30cm', 'Superfície speed', 'Base antiderrapante', 'Bordas costuradas', 'Espessura 3mm', 'Portátil'], specs: { 'Dimensões': '40x30cm', 'Espessura': '3mm', 'Material': 'Tecido microfibra', 'Base': 'Borracha natural', 'Bordas': 'Costuradas', 'Superfície': 'Speed (rápida)' } },
  { id: 13, name: 'Mousepad com Apoio de Pulso', desc: 'Gel memory foam, alivia tensão no punho', price: 44.90, img: '/images/mousepad5.jpg', category: 'mousepads', features: ['Apoio de pulso em gel', 'Memory foam', 'Superfície macia', 'Base antiderrapante', 'Tamanho 25x35cm', 'Alivia tensão no punho'], specs: { 'Dimensões': '25x35cm + apoio 25x8cm', 'Apoio': 'Gel memory foam', 'Material': 'Tecido suave', 'Base': 'Borracha antiderrapante', 'Altura apoio': '2.5cm', 'Uso': 'Ideal para escritório' } },
  { id: 14, name: 'Mousepad XXL Gamer', desc: '120x60cm, cobre mesa inteira, impermeável', price: 89.90, img: '/images/mousepad4.jpg', category: 'mousepads', features: ['Tamanho 120x60cm', 'Cobre mesa inteira', 'Superfície impermeável', 'Base antiderrapante', 'Bordas costuradas', 'Espessura 5mm'], specs: { 'Dimensões': '120x60cm', 'Espessura': '5mm', 'Material': 'Tecido impermeável', 'Base': 'Borracha texturizada', 'Bordas': 'Costuradas reforçadas', 'Cor': 'Preto com detalhes vermelhos' } },
  { id: 15, name: 'Mousepad Rígido Speed', desc: 'Superfície dura, base de alumínio, precisão máxima', price: 74.90, img: 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=300&h=300&fit=crop', category: 'mousepads', features: ['Superfície rígida', 'Base de alumínio escovado', 'Precisão máxima', 'Fácil limpeza', 'Tamanho 35x25cm', 'Design premium'], specs: { 'Dimensões': '35x25cm', 'Material': 'Alumínio escovado', 'Base': 'Borracha antiderrapante', 'Superfície': 'Rígida microtexturizada', 'Espessura': '2mm', 'Estilo': 'Premium' } },
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
      <div class="product-card" onclick="openProductDetail(${p.id})">
        <div class="product-img" style="background-image:url('${p.img}');background-size:cover;background-position:center;width:100%;height:160px;border-radius:8px 8px 0 0"></div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-price">${formatPrice(p.price)}</div>
          <div class="product-installments">${formatInstallment(p.price)}</div>
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${p.id})">Adicionar ao Carrinho</button>
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
  resetCardSections();

  document.getElementById('cpf-pix').value = '';
  document.getElementById('nome-pix').value = '';
  document.getElementById('email-pix').value = '';
  document.getElementById('cpf-card').value = '';
  document.getElementById('nome-card').value = '';
  document.getElementById('email-card').value = '';
  document.getElementById('card-number').value = '';
  document.getElementById('card-owner').value = '';
  document.getElementById('card-expiry').value = '';
  document.getElementById('card-cvv').value = '';

  populateInstallments();
  selectPayment('pix');

  closeCart();
  document.getElementById('payment-overlay').classList.add('active');
  document.getElementById('payment-modal').classList.add('active');
}

function closePayment() {
  document.getElementById('payment-overlay').classList.remove('active');
  document.getElementById('payment-modal').classList.remove('active');
  resetPixSections();
  resetCardSections();
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
  document.getElementById('tab-card').classList.toggle('active', method === 'card');
  document.getElementById('payment-form-pix').classList.toggle('hidden', method !== 'pix');
  document.getElementById('payment-form-card').classList.toggle('hidden', method !== 'card');
  if (method === 'card') populateInstallments();
}

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
    if (data.qrCodeDataUrl) {
      const img = document.createElement('img');
      img.src = data.qrCodeDataUrl;
      img.style.width = '200px';
      img.style.height = '200px';
      img.alt = 'QR Code PIX';
      qrContainer.appendChild(img);
    } else if (data.pixCode) {
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
    const response = await fetch(`/api/charge-status/${currentTransactionId}`);
    const data = await response.json();
    if (response.ok && data.status === 'COMPLETED') {
      stopPolling();
      confirmPayment();
      cart = [];
      updateCart();
      setTimeout(() => closePayment(), 2000);
    } else {
      showToast('Pagamento ainda não confirmado pela SigiloPay.', true);
    }
  } catch (e) {
    showToast('Erro ao verificar pagamento.', true);
  }
}

let pollAttempts = 0;

function startPolling() {
  stopPolling();
  pollAttempts = 0;
  document.getElementById('pix-poll-status').textContent = 'Aguardando pagamento...';
  pollInterval = setInterval(async () => {
    if (!currentTransactionId) return;
    pollAttempts++;
    try {
      const response = await fetch(`/api/charge-status/${currentTransactionId}`);
      const data = await response.json();
      if (data.status === 'COMPLETED') {
        stopPolling();
        confirmPayment();
        cart = [];
        updateCart();
        setTimeout(() => closePayment(), 2000);
        return;
      }
    } catch (e) {
      // ignore
    }
    document.getElementById('pix-poll-status').textContent =
      'Aguardando pagamento... Verificação automática em andamento';
  }, 5000);
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

/* ===== Card ===== */
function populateInstallments() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const sel = document.getElementById('card-installments');
  const max = 12;
  sel.innerHTML = '';
  for (let i = 1; i <= max; i++) {
    const val = (total / i).toFixed(2).replace('.', ',');
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${i}x de R$ ${val}${i === 1 ? ' à vista' : ' sem juros'}`;
    sel.appendChild(opt);
  }
}

function resetCardSections() {
  document.getElementById('card-initial').classList.remove('hidden');
  document.getElementById('card-processing').classList.add('hidden');
  document.getElementById('card-success').classList.add('hidden');
  document.getElementById('card-error').classList.add('hidden');
  document.getElementById('btn-pagar-cartao').disabled = false;
  document.getElementById('btn-pagar-cartao').textContent = 'Pagar com Cartão';
}

async function processarCartao() {
  const nome = document.getElementById('nome-card').value.trim();
  const email = document.getElementById('email-card').value.trim();
  const cpf = document.getElementById('cpf-card').value.trim();
  const number = document.getElementById('card-number').value.trim();
  const owner = document.getElementById('card-owner').value.trim();
  const expiry = document.getElementById('card-expiry').value.trim();
  const cvv = document.getElementById('card-cvv').value.trim();
  const installments = parseInt(document.getElementById('card-installments').value);

  if (!nome || !email || !cpf || !number || !owner || !expiry || !cvv) {
    showToast('Preencha todos os campos obrigatórios.', true);
    return;
  }

  const btn = document.getElementById('btn-pagar-cartao');
  btn.disabled = true;
  btn.textContent = 'Processando...';
  document.getElementById('card-initial').classList.add('hidden');
  document.getElementById('card-processing').classList.remove('hidden');

  const [mm, aa] = expiry.split('/');
  const fullYear = aa.length === 2 ? '20' + aa : aa;

  try {
    const response = await fetch('/api/create-card-charge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        value: currentPixTotal,
        installments,
        customer: {
          name: nome,
          email: email,
          phone: '(11) 99999-9999',
          taxID: cpf,
          document: cpf
        },
        card: {
          number,
          owner,
          expiresAt: fullYear + '-' + mm,
          cvv
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
      document.getElementById('card-processing').classList.add('hidden');
      document.getElementById('card-error').classList.remove('hidden');
      document.getElementById('card-error-info').textContent = data.message || data.error || 'Erro ao processar cartão.';
      btn.disabled = false;
      btn.textContent = 'Pagar com Cartão';
      return;
    }

    document.getElementById('card-processing').classList.add('hidden');
    document.getElementById('card-success').classList.remove('hidden');
    document.getElementById('card-success-info').textContent =
      `Pagamento de ${formatPrice(data.value)} aprovado! Transação: ${data.transactionId.substring(0, 12)}...`;
    showToast('Cartão aprovado!');

  } catch (error) {
    document.getElementById('card-processing').classList.add('hidden');
    document.getElementById('card-error').classList.remove('hidden');
    document.getElementById('card-error-info').textContent = 'Erro de conexão com o servidor.';
    btn.disabled = false;
    btn.textContent = 'Pagar com Cartão';
  }
}

function voltarCardInicial() {
  document.getElementById('card-error').classList.add('hidden');
  document.getElementById('card-initial').classList.remove('hidden');
  resetCardSections();
}

function finalizarPedidoCard() {
  showToast('Pedido confirmado! Pagamento de ' + formatPrice(currentPixTotal) + ' no cartão aprovado.');
  cart = [];
  updateCart();
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

/* ===== Product Detail Modal ===== */
let detailProductId = null;

function openProductDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  detailProductId = id;
  document.getElementById('detail-overlay').classList.add('active');
  document.getElementById('detail-modal').classList.add('active');
  document.getElementById('detail-name').textContent = p.name;
  document.getElementById('detail-image').style.backgroundImage = `url('${p.img}')`;
  document.getElementById('detail-price').textContent = formatPrice(p.price);
  document.getElementById('detail-installments').textContent = formatInstallment(p.price);
  document.getElementById('detail-desc').textContent = p.desc;

  const featuresEl = document.getElementById('detail-features');
  if (p.features && p.features.length) {
    featuresEl.innerHTML = '<h3>Características</h3><ul>' + p.features.map(f => `<li>${f}</li>`).join('') + '</ul>';
    featuresEl.style.display = '';
  } else {
    featuresEl.style.display = 'none';
  }

  const specsEl = document.getElementById('detail-specs');
  if (p.specs) {
    const rows = Object.entries(p.specs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
    specsEl.innerHTML = '<h3>Especificações Técnicas</h3><table>' + rows + '</table>';
    specsEl.style.display = '';
  } else {
    specsEl.style.display = 'none';
  }

  document.getElementById('btn-detail-cart').textContent = 'Adicionar ao Carrinho';
}

function closeProductDetail() {
  document.getElementById('detail-overlay').classList.remove('active');
  document.getElementById('detail-modal').classList.remove('active');
  detailProductId = null;
}

function addToCartFromDetail() {
  if (detailProductId) {
    addToCart(detailProductId);
    closeProductDetail();
  }
}

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

document.getElementById('card-number').addEventListener('input', function(e) {
  let val = e.target.value.replace(/\D/g, '').substring(0, 16);
  e.target.value = val.replace(/(\d{4})(?=\d)/g, '$1 ');
});

document.getElementById('card-expiry').addEventListener('input', function(e) {
  let val = e.target.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 3) {
    e.target.value = val.substring(0, 2) + '/' + val.substring(2);
  } else {
    e.target.value = val;
  }
});

document.getElementById('card-cvv').addEventListener('input', function(e) {
  e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
});

function formatCPF(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 11);
  if (val.length > 9) {
    val = val.substring(0, 3) + '.' + val.substring(3, 6) + '.' + val.substring(6, 9) + '-' + val.substring(9);
  } else if (val.length > 6) {
    val = val.substring(0, 3) + '.' + val.substring(3, 6) + '.' + val.substring(6);
  } else if (val.length > 3) {
    val = val.substring(0, 3) + '.' + val.substring(3);
  }
  input.value = val;
}

document.getElementById('cpf-pix').addEventListener('input', function(e) { formatCPF(e.target); });
document.getElementById('cpf-card').addEventListener('input', function(e) { formatCPF(e.target); });

if (!currentUser) {
  openAuthModal();
}

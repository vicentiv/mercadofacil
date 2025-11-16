function loadCart() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("cartContainer");
  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    document.getElementById("total").innerText = "Total: R$ 0,00";
    return;
  }

  let total = 0;

  carrinho.forEach((item, index) => {
    let precoNumber = parseFloat(item.preco.replace("R$", "").replace(",", "."));
    let subtotal = precoNumber * item.quantidade;
    total += subtotal;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div class="cart-info">
          <h4>${item.nome}</h4>
          <p>Preço: ${item.preco}</p>
          <div class="qty-controls">
            <button class="qty-btn" onclick="diminuir(${index})">-</button>
            <span>${item.quantidade}</span>
            <button class="qty-btn" onclick="aumentar(${index})">+</button>
            <button class="remove-btn" onclick="remover(${index})">Remover</button>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText =
    "Total: R$ " + total.toFixed(2).replace(".", ",");
}

function aumentar(i) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho[i].quantidade++;
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  loadCart();
}

function diminuir(i) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (carrinho[i].quantidade > 1) {
    carrinho[i].quantidade--;
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  loadCart();
}

function remover(i) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(i, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  loadCart();
}

// --- BOTÃO PAGAR ---
const btn = document.getElementById("payBtn");
const confettiArea = document.getElementById("confettiAround");

btn.addEventListener("click", () => {
  if (btn.classList.contains("loading")) return;

  btn.classList.add("loading");
  btn.innerHTML = `<div class="spinner"></div> Processando...`;

  setTimeout(() => {
    btn.classList.remove("loading");
    btn.classList.add("success");
    btn.innerHTML = `✔ Pago!`;

    salvarPedido();
    burstConfetti();

  }, 2000);
});

// --- SALVAR PEDIDO APÓS PAGAR ---
function salvarPedido() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const pedido = {
    itens: carrinho,
    horario: new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    }),
    status: "a_caminho"
  };

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  pedidos.push(pedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));

  // limpa carrinho após pagar
  localStorage.removeItem("carrinho");
}

function burstConfetti() {
  for (let i = 0; i < 35; i++) {
    let conf = document.createElement("div");
    conf.classList.add("confetti-piece");

    conf.style.left = "50%";
    conf.style.top = "50%";

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 40;

    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    conf.style.setProperty("--x", x);
    conf.style.setProperty("--y", y);

    conf.style.background = randomColor();

    confettiArea.appendChild(conf);

    setTimeout(() => conf.remove(), 900);
  }
}

function randomColor() {
  const colors = ["#ff4d4d", "#ffd700", "#4caf50", "#00c8ff", "#ff7c00", "#ff00d4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

loadCart();

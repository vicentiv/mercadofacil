window.onload = function () {
  const role = localStorage.getItem("userRole");
  const email = localStorage.getItem("userEmail");

  if (!role || !email) {
    window.location.href = "index.html";
  }
};

const catalogos = {
  farmacia: {
    titulo: "Farma Conde",
    produtos: [
      { nome: "Dipirona 500mg", preco: "R$ 7,90", img: "imgs/remedio.png" },
      { nome: "Vitamina C", preco: "R$ 12,90", img: "imgs/remedio.png" },
      { nome: "Buscopan", preco:"R$25,00", img:"imgs/remedio.png"},
    ],
  },

  padaria: {
    titulo: "Padaria São João",
    produtos: [
      { nome: "Pão Francês (kg)", preco: "R$ 14,00", img: "imgs/pao.png" },
      { nome: "Coxinha", preco: "R$ 7,00", img: "imgs/coxinha.png" },
      { nome: "Bolo de Cenoura", preco: "R$ 18,00", img: "imgs/bolo.png" },
    ],
  },

  sorveteria: {
    titulo: "Sorveteria Oh Açaí",
    produtos: [
      { nome: "Açaí 300ml", preco: "R$ 12,90", img: "imgs/açai.png" },
      { nome: "Açaí com Banana", preco: "R$ 14,90", img: "imgs/açai.png" },
    ],
  },
};

const modal = document.getElementById("catalogModal");
const closeBtn = document.getElementById("closeCatalog");
const title = document.getElementById("catalogTitle");
const productList = document.querySelector(".product-list");

document.querySelectorAll(".market-card").forEach((card) => {
  card.addEventListener("click", () => {
    const lojaID = card.dataset.loja;
    const loja = catalogos[lojaID];

    if (!loja) return;

    title.textContent = loja.titulo;
    productList.innerHTML = "";

    loja.produtos.forEach((produto) => {
      productList.innerHTML += `
        <div class="product-item">
          <img src="${produto.img}">
          <div>
            <h4>${produto.nome}</h4>
            <p>${produto.preco}</p>
          </div>
        </div>
      `;
    });

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "catalogModal") {
    modal.style.display = "none";
  }
});

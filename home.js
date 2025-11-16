// window.onload = function () {
//   const role = localStorage.getItem("userRole");
//   const email = localStorage.getItem("userEmail");

//   if (!role || !email) {
//     window.location.href = "index.html";
//   }
// };

const catalogos = {
  farmacia: {
    titulo: "Farma Conde",
    produtos: [
      { nome: "Dipirona 500mg", preco: "R$ 7,90", img: "prodimgs/farmacia/dipirona.png" },
      { nome: "Vitamina C", preco: "R$ 16,90", img: "prodimgs/farmacia/vitaminac.png" },
      { nome: "Buscopan", preco: "R$25,00", img: "prodimgs/farmacia/buscopan.png" },
      { nome: "Benegrip", preco: "R$25,00", img: "prodimgs/farmacia/benegrip.png" },
    ],
  },

  padaria: {
    titulo: "Panificadora Hercules",
    produtos: [
      { nome: "Pão Francês (kg)", preco: "R$ 14,00", img: "prodimgs/padaria/pao.png" },
      { nome: "Coxinha", preco: "R$ 7,00", img: "prodimgs/padaria/coxinha.png" },
      { nome: "Bolo de Cenoura", preco: "R$ 18,00", img: "prodimgs/padaria/bolo.png" },
      { nome: "Mortadela Defumada (kg)", preco: "R$ 20,00", img: "prodimgs/padaria/mortadela.png" },
    ],
  },

  papelaria: {
    titulo: "Ana clara papelaria",
    produtos: [
      { nome: "Caixa de lápis Faber Castell", preco: "R$ 22,90", img: "prodimgs/papelaria/lapisfaber.png" },
      { nome: "Tesoura acrilex (und)", preco: "R$ 15,50", img: "prodimgs/papelaria/tesoura.png" },
      { nome: "Papel crepom (Und)", preco: "R$ 1,50", img: "prodimgs/papelaria/crepom.png" },
      { nome: "Tinta guache", preco: "R$ 9,90", img: "prodimgs/papelaria/tinta.png" },
      { nome: "Cartolina", preco: "R$ 55,99", img: "prodimgs/papelaria/cartolina.png" },
    ],
  },

  açogue: {
    titulo: "Casa de carnes Magnífica",
    produtos: [
      { nome: "Alcatra (kg)", preco: "R$ 34,99", img: "prodimgs/açogue/alcatra.png" },
      { nome: "Peito de frango (kg)", preco: "R$ 15,99", img: "prodimgs/açogue/frango.png" },
      { nome: "Patinho moído(kg)", preco: "R$ 45,99", img: "prodimgs/açogue/patinhomoido.png" },
      { nome: "Pernil (kg)", preco: "R$ 39,99", img: "prodimgs/açogue/pernil.png" },
      { nome: "Picanha(kg)", preco: "R$ 79,99", img: "prodimgs/açogue/picanha.png" },
    ],
  },

  supermercado: {
    titulo: "Sempre vale supermercados",
    produtos: [
      { nome: "Arroz", preco: "R$ 17,99", img: "prodimgs/mercado/arroz.png" },
      { nome: "Azeite", preco: "R$ 35,99", img: "prodimgs/mercado/azeite.png" },
      { nome: "Coca-cola", preco: "R$ 9,99", img: "prodimgs/mercado/coca.png" },
      { nome: "Feijão", preco: "R$ 8,99", img: "prodimgs/mercado/feijao.png" },
      { nome: "Margarina", preco: "R$ 6,99", img: "prodimgs/mercado/margarina.png" },
      { nome: "Suco", preco: "R$ 5,99", img: "prodimgs/mercado/suco.png" },
    ],
  },

  petshop: {
    titulo: "Petshop Azulão",
    produtos: [
      { nome: "Arranhador para gatos", preco: "R$ 120,90", img: "prodimgs/petshop/arranhador.png" },
      { nome: "Ração pedigree", preco: "R$ 89,90", img: "prodimgs/petshop/cão.png" },
      { nome: "Ração whiskas para gatos", preco: "R$39,00", img: "prodimgs/petshop/gato.png" },
      { nome: "Petiscos para gatos", preco: "R$29,00", img: "prodimgs/petshop/petisco.png" },
    ],
  },

  lojadefrutas: {
    titulo: "Hortifruti Bela vista",
    produtos: [
      { nome: "Pimentão", preco: "R$ 6,50 (kg)", img: "prodimgs/lojadefrutas/pimentao.png" },
      { nome: "Banana prata", preco: "R$ 9,90 (kg)", img: "prodimgs/lojadefrutas/banana.png" },
      { nome: "Melancia", preco: "R$15,00 (und)", img: "prodimgs/lojadefrutas/melancia.png" },
      { nome: "Maçã", preco: "R$8,99 (kg)", img: "prodimgs/lojadefrutas/maçã.png" },
      { nome: "Laranja", preco: "R$7,00 (kg)", img: "prodimgs/lojadefrutas/laranja.png" },
      { nome: "Manga", preco: "R$12,00 (kg)", img: "prodimgs/lojadefrutas/manga.png" },
      { nome: "Mamão", preco: "R$6,00 (und)", img: "prodimgs/lojadefrutas/mamão.png" },
    ],
  },

  roupas: {
    titulo: "Amandinha Modas",
    produtos: [
      { nome: "Calça masculina", preco: "R$ 89,99", img: "prodimgs/roupas/calça.png" },
      { nome: "Camisa do flamengo", preco: "R$ 590,99", img: "prodimgs/roupas/mengo.png" },
      { nome: "camisa nike", preco: "R$ 99,99", img: "prodimgs/roupas/nike.png" },
      { nome: "vestido feminino", preco: "R$ 120,99", img: "prodimgs/roupas/vestido.png" },
    ],
  },

  sorveteria: {
    titulo: "Sorveteria Oh Açaí",
    produtos: [
      { nome: "Açaí 300ml", preco: "R$ 15,90", img: "prodimgs/sorveteria/kiwi.png" },
      { nome: "Açaí com Banana", preco: "R$ 12,90", img: "prodimgs/sorveteria/morango.png" },
      { nome: "Sorvete napolitano", preco: "R$ 14,90", img: "prodimgs/sorveteria/sorvete.png" },
    ],
  },
};

// -----------------------------
// MODAL + BOTÃO COMPRAR
// -----------------------------

const modal = document.getElementById("catalogModal");
const closeBtn = document.getElementById("closeCatalog");
const title = document.getElementById("catalogTitle");
const productList = document.querySelector(".product-list");

// Abrir modal com produtos
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

            <button class="buyBtn"
              onclick='addToCart("${produto.nome}", "${produto.preco}", "${produto.img}")'>
              Comprar
            </button>
          </div>
        </div>
      `;
    });

    modal.style.display = "flex";
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "catalogModal") {
    modal.style.display = "none";
  }
});

// -----------------------------
// ADICIONAR AO CARRINHO
// -----------------------------
function addToCart(nome, preco, img) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  let existente = carrinho.find((item) => item.nome === nome);

  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.push({
      nome: nome,
      preco: preco,
      img: img,
      quantidade: 1,
    });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");
}

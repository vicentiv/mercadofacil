window.onload = function () {
  const lista = document.getElementById("listaPedidos");
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  if (pedidos.length === 0) {
    lista.innerHTML = "<p>Nenhum pedido foi realizado ainda.</p>";
    return;
  }

  pedidos.forEach((pedido, index) => {
    const div = document.createElement("div");
    div.classList.add("pedido-card");

    // montar lista de itens
    let itensHTML = "";
    pedido.itens.forEach(item => {
      itensHTML += `
        <div class="produto">
          <img src="${item.img}">
          <div>
            <strong>${item.nome}</strong><br>
            Qtd: ${item.quantidade}<br>
            Preço: ${item.preco}
          </div>
        </div>
      `;
    });

    div.innerHTML = `
      <h3>Pedido #${index + 1}</h3>
      <span class="status">🚚 A caminho</span>
      <p><small>Realizado às ${pedido.horario}</small></p>

      <div class="produtos-container">
        ${itensHTML}
      </div>
    `;

    lista.appendChild(div);
  });
};

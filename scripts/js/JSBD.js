// // Função para obter lista de usuários
// function getUsuarios() {
//   return JSON.parse(localStorage.getItem("usuarios")) || [];
// }

// // Função para salvar lista de usuários
// function setUsuarios(lista) {
//   localStorage.setItem("usuarios", JSON.stringify(lista));
// }

// // Lidar com o envio do formulário
// document.getElementById("formCadastro").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const nome = document.getElementById("nome").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const senha = document.getElementById("senha").value.trim();

//   // Validação simples
//   if (!nome || !email || !senha) {
//     alert("Preencha todos os campos!");
//     return;
//   }

//   const usuarios = getUsuarios();

//   // Verifica se o e-mail já foi cadastrado
//   const jaExiste = usuarios.some((u) => u.email === email);
//   if (jaExiste) {
//     alert("Este e-mail já está cadastrado!");
//     return;
//   }

//   // Cria novo usuário
//   const novoUsuario = {
//     id: crypto.randomUUID(),
//     nome,
//     email,
//     senha, // ⚠️ Não use assim em apps reais
//   };

//   // Salva no "banco local"
//   usuarios.push(novoUsuario);
//   setUsuarios(usuarios);

//   // Limpa o formulário
//   document.getElementById("formCadastro").reset();

//   // Mensagem de sucesso
//   document.getElementById("mensagem").textContent =
//     "Usuário cadastrado com sucesso!";
// });

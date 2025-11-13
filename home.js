window.onload = function() {
  const role = localStorage.getItem("userRole");
  const email = localStorage.getItem("userEmail");

  if (!role || !email) {
    window.location.href = "index.html"; // se não estiver logado
  } else {
    document.getElementById("userInfo").textContent =
      `Usuário logado: ${email} (${role})`;
  }
};

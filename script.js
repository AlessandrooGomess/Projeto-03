document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();

      if (email === "alessandro@gmail.com" && senha === "123") {
        window.location.href = "index.html";
      } else {
        alert("Usuário ou senha incorretos!");
      }
    });
  }

  const botaoSair = document.getElementById("botao-sair");
  if (botaoSair) {
    botaoSair.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});

document.getElementById('preco').addEventListener('keypress', function (event) {

  const permitidos = "0123456789.,";

  if(!permitidos.includes(event.key)){
    event.preventDefault();
    alert('❌ Este campo só aceita números!');
  }
})

document.getElementById('quantidade').addEventListener('keypress', function(event){

  const permitidos ='0123456789';

  if(!permitidos.includes(event.key)){
    event.preventDefault();
    alert('❌ Este campo só aceita números!');
  }
})
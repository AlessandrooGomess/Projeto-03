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

const inputs = document.querySelectorAll(".numero input");
const mensagem = document.getElementById("mensagem");

inputs.forEach((input) => {
  input.addEventListener("input", function (e) {

    const valorLimpo = e.target.value.replace(/[^0-9.,]/g, '');

    if (e.target.value !== valorLimpo) {
      mensagem.style.display = "block";
      e.target.value = valorLimpo;
    } else {
      mensagem.style.display = "none";
    }

    const partes = valorLimpo.split(/[.,]/);
    if (partes.length > 2) {
      e.target.value = partes[0] + "." + partes[1];
    }
  });
});

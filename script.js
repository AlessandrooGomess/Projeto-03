document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const usuario = document.getElementById("usuario").value.trim();
            const senha = document.getElementById("senha").value.trim();

            if (usuario === "alessandro" && senha === "123") {
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
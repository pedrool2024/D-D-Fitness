const form = document.querySelector("form");
const btn = document.getElementById("btnLogin");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    btn.classList.add("loading");
    btn.innerText = "Entrando...";
    btn.disabled = true;

    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const user = usuarios.find(u => u.email === email && u.senha === senha);

    setTimeout(() => {
        if (user) {
            localStorage.setItem("usuarioLogado", JSON.stringify(user));

            // 🔥 vai pra home
            window.location.href = "../index.html";
        } else {
            alert("Email ou senha incorretos!");

            btn.classList.remove("loading");
            btn.innerText = "Entrar";
            btn.disabled = false;
        }
    }, 600);
});
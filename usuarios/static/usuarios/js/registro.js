function registrar(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const email2 = document.getElementById("email2").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha2").value;

    // validações
    if (email !== email2) {
        alert("Os e-mails não coincidem!");
        return;
    }

    if (senha !== senha2) {
        alert("As senhas não coincidem!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.email === email);

    if (existe) {
        alert("Esse e-mail já está cadastrado!");
        return;
    }

    usuarios.push({
        nome,
        email,
        cpf,
        senha
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    const popup = document.getElementById("popupSucesso");
    popup.classList.add("active");

    // espera e redireciona
    setTimeout(() => {
        window.location.href = "../Login/teladelogin.html";
    }, 2000);

    // 🔥 vai pro login
    window.location.href = "../Login/index.html";
}
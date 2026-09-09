// Pega todos os itens do menu
const menuItems = document.querySelectorAll('.nav h2');

// Seções do site
const inicio = document.querySelector('section');
const beneficios = document.querySelector('.parte2');
const comoFunciona = document.querySelector('.seçao4');
const treinos = document.querySelector('.seçao5');

// Função de scroll
function scrollPara(secao) {
    secao.scrollIntoView({
        behavior: 'smooth'
    });
}

// Eventos de clique
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const texto = item.textContent.trim();

        if (texto === "Inicio") scrollPara(inicio);
        if (texto === "Sobre") scrollPara(beneficios);
        if (texto === "Benefícios") scrollPara(beneficios);
        if (texto === "Como funciona") scrollPara(comoFunciona);
        if (texto === "Treinos") scrollPara(treinos);
    });
});

// Pega o botão
const btnTopo = document.getElementById("btnTopo");

// Mostrar botão quando rolar a página
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

// Voltar ao topo ao clicar
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
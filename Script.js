// No seu ficheiro 'JavaScript.js'

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Função para fechar o menu
    const closeMenu = () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    // Evento de clique no hambúrguer
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Fechar o menu quando um link é clicado (para navegação suave)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) { // Apenas se o menu estiver aberto
                closeMenu();
            }
        });
    });

    // Opcional: Fechar o menu se clicar fora dele (apenas em mobile)
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Opcional: Fechar o menu ao redimensionar a tela para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) { // Exemplo de breakpoint, ajuste conforme o seu CSS
            closeMenu();
        }
    });
});
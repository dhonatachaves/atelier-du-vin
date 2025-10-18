// Elementos do menu mobile
const menuMobile = document.querySelector('.menu-mobile');
const itensMenu = document.querySelector('.itens-menu');
const menuMobileMmLine = document.querySelectorAll('.mm-line');


menuMobile.addEventListener('click', showMenu);



// Controla a abertura e o fechamento do menu mobile
function showMenu(e) {
    // Adiciona ou remove a classe show-menu
    itensMenu.classList.toggle('show-menu');

    // Altera a cor das linhas do menu mobile
    menuMobileMmLine.forEach((row) => {
       row.classList.toggle('menu-mobile-click');
    })

    // Melhoria de Acessibilidade: Alternar o atributo ARIA
    const isExpanded = menuMobile.getAttribute('aria-expanded') === 'true' || false;
    menuMobile.setAttribute('aria-expanded', !isExpanded);
}






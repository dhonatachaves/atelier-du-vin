// Elementos do menu mobile
const menuMobile = document.querySelector('.menu-mobile');
const itensMenu = document.querySelector('.itens-menu');
const menuMobileMmLine = document.querySelectorAll('.mm-line');
const listaDeVinhos = [
    {
        id: 1,
        nome: "Château Reserva Especial",
        preco: 2500,
        imagem: "assets/images/vinho-1.jpeg",
        descricao: "Um tinto robusto com notas de carvalho e frutas vermelhas."
    },
    {
        id: 2,
        nome: "Espumante Brut Rosé",
        preco: 1400,
        imagem: "assets/images/vinho-2.jpeg",
        descricao: "Leve e frutado, ideal para celebrações. Experimente o melhor!"
    },
    {
        id: 3,
        nome: "Espumante Galax Luanny",
        preco: 1500,
        imagem: "assets/images/vinho-3.jpeg",
        descricao: "Irresístivel, a prova que o sabor perfeito existe. Aproveite!"
    },
    {
        id: 1,
        nome: "Château Reserva Especial",
        preco: 2500,
        imagem: "assets/images/vinho-1.jpeg",
        descricao: "Um tinto robusto com notas de carvalho e frutas vermelhas."
    }

];


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



function gerarCardsDeProdutos() {
    const gridContainer = document.querySelector('.product-grid');
    let htmlContent = '';

    listaDeVinhos.forEach(vinho => {
        const cardHTML = `<div class="product-card" data-product-id="${vinho.id}">
            <img src="${vinho.imagem}" alt="${vinho.nome}">
            <h3>${vinho.nome}</h3>
            <p class="description"> ${vinho.descricao}</p>
            <span class="price"> R$ ${vinho.preco.toFixed(2).replace('.', ',')}</span>
            <button class="add-to-cart-btn" data-id="${vinho.id}"> Adicionar </button>
        </div> `;

        htmlContent += cardHTML; // Concatena o HTML de cada card
    });
    gridContainer.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', gerarCardsDeProdutos);

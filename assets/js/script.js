/* =======================================================================
  SELETORES DO DOM (Painel de Controle)
  Todas as variáveis que "selecionam" elementos do HTML.
  Agora 100% em inglês.
=======================================================================
*/
// --- Menu Mobile ---
const mobileMenuButton = document.querySelector('.menu-mobile');
const menuItems = document.querySelector('.menu-items'); // Renomeado de .itens-menu
const mobileMenuLines = document.querySelectorAll('.mm-line');

// --- Produtos ---
const productGrid = document.querySelector('.product-grid');

// --- Carrinho ---
const cartQuantityBubble = document.querySelector('.cart-quantity-bubble'); // Renomeado de .quantidade-itens
const cartWidget = document.querySelector('.cart-widget'); // Renomeado de .aside-carrinho-de-compras
const cartSidebar = document.querySelector('.cart-sidebar'); // Renomeado de .tela-de-pedido
const closeCartButton = document.querySelector('.cart-close-button'); // Renomeado de .fechar-tela-pedido
const cartButton = document.querySelector('.cart-button'); // Renomeado de .carrinho-de-compras
const overlay = document.querySelector('.overlay'); // Renomeado de .sobreposicao
const cartItemsContainer = document.querySelector('.cart-items-container'); // Renomeado de .caixa-itens
const subtotalElement = document.querySelector('.subtotal'); // Corrigido de 'subtotaElemento'


/* =======================================================================
  "BANCO DE DADOS" E "ESTADO" (O Cérebro)
=======================================================================
*/
// "Banco de Dados" Falso (Renomeado de 'listaDeVinhos')
const productList = [
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
        id: 4,
        nome: "Château Reserva Especial",
        preco: 2500,
        imagem: "assets/images/vinho-1.jpeg",
        descricao: "Um tinto robusto com notas de carvalho e frutas vermelhas."
    }
];

// "Estado" (A Única Fonte da Verdade) (Renomeado de 'itensDoCarrinho')
let cartItems = [];


/* =======================================================================
  CONTROLADORES DE UI (Interface do Usuário)
=======================================================================
*/

// Renomeado de 'abrirCarrinho'
function openCart() {
    cartWidget.classList.add('hidden'); // Renomeado de '.esconder'
    cartSidebar.classList.add('cart-open'); // Renomeado de '.carrinho-aberto'
    overlay.classList.add('overlay-visible'); // Renomeado de '.sobreposicao-visivel'

    // Renomeado de '.bloqueio-de-rolagem'
    document.documentElement.classList.add('scroll-lock');
    document.body.classList.add('scroll-lock');
}

// Renomeado de 'fecharCarrinho'
function closeCart() {
    cartWidget.classList.remove('hidden');
    cartSidebar.classList.remove('cart-open');
    overlay.classList.remove('overlay-visible');

    document.documentElement.classList.remove('scroll-lock');
    document.body.classList.remove('scroll-lock');
}

// Renomeado de 'showMenu'
function toggleMobileMenu(e) {
    menuItems.classList.toggle('show-menu');
    mobileMenuLines.forEach((row) => {
        row.classList.toggle('menu-mobile-click');
    })
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
}


/* =======================================================================
  INICIALIZAÇÃO DA APLICAÇÃO
=======================================================================
*/

// Renomeado de 'gerarCardsDeProdutos'
function generateProductCards() {
    let htmlContent = '';

    productList.forEach(product => { // 'vinho' -> 'product'
        const productCardHTML = `<div class="product-card" data-product-id="${product.id}">
            <img src="${product.imagem}" alt="${product.nome}">
            <h3>${product.nome}</h3>
            <p class="description"> ${product.descricao}</p>
            <span class="price"> R$ ${product.preco.toFixed(2).replace('.', ',')}</span>
            <button class="add-to-cart-btn" data-id="${product.id}"> Adicionar </button>
        </div> `;

        htmlContent += productCardHTML;
    });
    productGrid.innerHTML = htmlContent;

    addCardButtonListeners(); // Renomeado
}

// Renomeado de 'adicionarListenerAosBotoes'
function addCardButtonListeners() {
    const addButtons = document.querySelectorAll('.add-to-cart-btn'); // 'botaoAdicionar' -> 'addButtons'
    addButtons.forEach(btn => {
        btn.addEventListener('click', addToCart); // 'adicionarCarrinho' -> 'addToCart'
    });
}


/* =======================================================================
  LÓGICA DE NEGÓCIO (O "Cérebro" em Ação)
=======================================================================
*/

// Renomeado de 'adicionarCarrinho'
function addToCart(event) { // 'evento' -> 'event'
    const clickedButton = event.target; // 'botaoClicado' -> 'clickedButton'
    const productId = clickedButton.dataset.id; // 'produtoId' -> 'productId'

    // 'itemNoCarrinho' -> 'itemInCart'
    // Usando Number() para garantir a comparação correta (Número com Número)
    const itemInCart = cartItems.find(item => item.id === Number(productId));

    if (itemInCart) {
        // Se já existe, apenas incrementa a quantidade
        itemInCart.quantity++;
    } else {
        // Se é novo, encontra no "banco de dados" e adiciona
        // 'produtoParaAdicionar' -> 'productToAdd'
        // Usando '==' aqui também funciona, mas 'Number()' no find() acima é mais explícito
        const productToAdd = productList.find(p => p.id == productId); 

        if (productToAdd) { // Verificação de segurança
            cartItems.push({
                ...productToAdd, // Copia 'id', 'nome', 'preco'...
                quantity: 1       // Adiciona a quantidade inicial
            });
        }
    }

    // Após modificar o "Cérebro" (cartItems), atualiza a "View" (tela)
    renderCartItems();
    updateCounters();
}


/* =======================================================================
  FUNÇÕES DE RENDERIZAÇÃO (A "View" - Interface)
=======================================================================
*/

// Renomeado de 'renderizarItensCarrinho'
function renderCartItems() {
    cartItemsContainer.innerHTML = ''; // Limpa o container

    if (cartItems.length === 0) {
        // Se o "Cérebro" (cartItems) está vazio...
        cartItemsContainer.innerHTML = '<p class="cart-empty-message"> Seu carrinho está vazio.</p>';
        cartItemsContainer.classList.add('is-empty'); // Renomeado de '.carrinho-vazio-centralizado'
    } else {
        // Se o "Cérebro" tem itens...
        cartItemsContainer.classList.remove('is-empty');

        cartItems.forEach(item => {
            // Gera o HTML para CADA item no "Cérebro"
            // Classes atualizadas: .cart-item, .item-details, .item-title, etc.
            const itemHTML = `<div class="cart-item" data-item-id="${item.id}">
                <div class="item-img">
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>
                <div class="item-details">
                    <div class="item-title">
                        <h3>${item.nome}</h3>
                    </div>
                    <div class="item-quantity-controls">
                        <button class="quantity-control-button" data-acao="decrementar">
                            <img src="assets/icons/remove.svg" alt="Diminuir quantidade">
                        </button>
                        <span class="quantity-value">
                            ${item.quantity}
                        </span>
                        <button class="quantity-control-button" data-acao="incrementar">
                            <img src="assets/icons/add.svg" alt="Aumentar quantidade">
                        </button>
                    </div>
                </div>
                <div class="item-remove-section">
                    <button class="remove-item-button" data-acao="remover">
                        Remover
                    </button>
                </div>
            </div> `;

            cartItemsContainer.innerHTML += itemHTML;
        });
    }
}

// Renomeado de 'atualizarContadores'
function updateCounters() {
    // .reduce() soma todas as 'quantity' no array 'cartItems'
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    // .reduce() soma o (preço * quantidade) de cada item
    const subtotal = cartItems.reduce((sum, item) => sum + (item.preco * item.quantity), 0);

    // Atualiza o HTML
    cartQuantityBubble.textContent = totalItems;
    subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}


/* =======================================================================
  LISTENERS DE EVENTOS (Os "Ouvintes")
=======================================================================
*/

// Delegação de Eventos para os botões (+, -, Remover)
// "Escuta" por cliques no container PAI (agora 'cartItemsContainer')
cartItemsContainer.addEventListener('click', (event) => {
    const clickedTarget = event.target; // 'clicado' -> 'clickedTarget'

    // 'botaoAcao' -> 'actionButton'
    // *** BUG CORRIGIDO AQUI: Adicionado ']' no final de [data-acao] ***
    const actionButton = clickedTarget.closest('[data-acao]');

    if (!actionButton) {
        return; // Clicou fora de um botão de ação
    }

    const action = actionButton.dataset.acao; // 'acao' -> 'action'
    // 'itemPai' -> 'parentItem', '.itens' -> '.cart-item'
    const parentItem = clickedTarget.closest('.cart-item'); 
    const itemId = parentItem.dataset.itemId;

    // 'itemNoCarrinho' -> 'itemInCart'
    const itemInCart = cartItems.find(item => item.id === Number(itemId));

    if (!itemInCart) {
        return;
    }

    // Lógica para modificar o "Cérebro"
    if (action === 'incrementar') {
        itemInCart.quantity++;
    } else if (action === 'decrementar') {
        if (itemInCart.quantity > 1) {
            itemInCart.quantity--;
        } else {
            // Se for 1, remove o item
            cartItems = cartItems.filter(item => item.id !== Number(itemId));
        }
    } else if (action === 'remover') {
        // *** BUG CORRIGIDO AQUI: Comparando com 'itemId' (a variável) ***
        // (Antes estava 'item.id != Number(item.id)', removendo tudo)
        cartItems = cartItems.filter(item => item.id !== Number(itemId));
    }

    // "Redesenha" a tela com base no "Cérebro" atualizado
    renderCartItems();
    updateCounters();
});

// --- Listeners de UI (Menu e Abrir/Fechar Carrinho) ---
cartButton.addEventListener('click', openCart);
closeCartButton.addEventListener('click', closeCart);
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// --- Ponto de Entrada da Aplicação ---
// Quando o HTML estiver pronto, gere os produtos
document.addEventListener('DOMContentLoaded', generateProductCards);
# A L’Atelier du Vin — Loja de Vinhos Premium

## 🏷️ Descrição
Projeto de um e-commerce premium especializado em vinhos de alta qualidade, com foco em design elegante e funcionalidade avançada de carrinho de compras. Este projeto combina uma paleta de cores sofisticada, tipografia refinada e interatividade dinâmica para proporcionar uma experiência de compra única.

---

## 🎨 Design & Estilo

### Paleta de Cores
- **Primária:** #3A0000 (Bordô / Vinho escuro profundo)  
- **Secundária:** #8A0000 (Vinho tinto vibrante para destaques)  
- **Neutras:** #F8F8F8 (Off-White / Creme para fundo principal), #1C1C1C (Preto muito escuro para texto principal)  
- **Destaque/Ação (CTA):** #DAA520 (Goldenrod/Ouro para botões "Adicionar")

### Fontes
- **Headline (H1, H2):** 'Playfair Display' — Serif elegante para títulos  
- **Corpo/Texto (P, Botões):** 'Roboto' — Sans-serif moderno para legibilidade  

### Tipografia
- **H1:** 4.5rem (Desktop), 2.5rem (Mobile), font-weight: 700  
- **H2 (Seção):** 2.5rem  
- **Preços/CTA:** 1.2rem (Ouro), font-weight: 500  

### Estilos e Bordas
- Bordas mínimas, com foco em espaçamento e fotografia  
- border-radius: 4px para botões e cards de produto  
- Sombras sutis (exemplo: 0 4px 12px rgba(58, 0, 0, 0.2)) para elementos em destaque (ex: carrinho flutuante)  

### Efeito Hover
- Botões “Adicionar ao Carrinho”: transição suave no background-color e cor do texto  
- Cards de produto: leve transform (translateY(-5px)) e aumento sutil da sombra para efeito de destaque  

---

## 💻 Funcionalidades do Projeto

### Layout e Responsividade
- Grid responsivo: 3 colunas no desktop, 1 coluna no mobile  
- Cabeçalho fixo ou semi-fixo  
- Carrinho de compras como barra lateral no desktop e flutuante no mobile  

### Produtos
- Lista dinâmica de pelo menos 6 vinhos gerada via JavaScript (nome, preço, imagem, id)  
- Cada card de produto com imagem, título, descrição curta, preço e botão “Adicionar”  

### Carrinho de Compras (JavaScript)
- Adicionar, remover e ajustar quantidade de produtos  
- Atualização instantânea da interface e do total do pedido  

### Resumo do Pedido
- Exibição do subtotal  
- Valor fixo de frete (R$ 30,00)  
- Total final calculado e atualizado  

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:  
   ```bash
   git clone <URL_DO_REPOSITORIO>
    ```
### 🧱 HTML & CSS Avançado

**Layout e Responsividade**
 - Use CSS Grid para exibir os produtos:
   - **Desktop**: 3 colunas

   - **Mobile**: 1 coluna
 - O **cabeçalho** deve ser **fixo** ou **semi-fixo**.
 - O **carrinho** deve ser uma **barra lateral** (desktop) ou **flutuante** (mobile).

### Módulo de Produto

Cada produto deve conter:
- Imagem de alta qualidade

- Título

- Descrição curta

- Preço

- Botão **“Adicionar”** (estilizado com a cor Ouro #DAA520)

### ⚙️ JavaScript (Fundamentos)

**Geração de Produtos**
 - Crie uma lista com **pelo menos 6 vinhos**:
```javascript
const produtos = [
  { id: 1, nome: "Château Margaux 2015", preco: 2500, imagem: "img/margaux.jpg" },
  // ...
];
```
- Use **JavaScript** para **gerar dinamicamente** o HTML dos cards de produto.
- **Não** codifique os cards diretamente no HTML.

### 🛒 JavaScript (Interatividade)

**Carrinho de Compras**
- Funcionalidade completa:
  - **Adicionar item**

  - **Remover item**

  - **Aumentar / Diminuir quantidade**

- Todos os cliques devem **atualizar instantaneamente**:
  - A interface do carrinho

  - O estado total (preço)

### 💰 JavaScript (Cálculo)

**Resumo do Pedido**
 - Exibir:
   - Subtotal

   - Frete Fixo: R$ 30,00

   - otal Final (Subtotal + Frete)

### 🧠 Observação Final

Este projeto une **design refinado** e **funcionalidade avançada**.
Você (desenvolvedor) focará na **estrutura e interatividade**, enquanto o UI/UX Designer fornecerá o **briefing completo de estilo e usabilidade**.
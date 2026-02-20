// Categorias dos filmes

const filmes = {
    recomendados: [
        { titulo: "Stranger Things", img: "./imagens/strangerCapa.jpg", nota: "8.6"},
        { titulo: "Zootopia 2", img: "./imagens/zootopia.jpg", nota: "7.6" },
        { titulo: "The Beast in Me", img: "./imagens/theBeast.jpg", nota: "7.5" },
        { titulo: "O Morro dos Ventos Uivantes", img: "./imagens/ventoUivantes.jpg", nota: "7.9" },
        { titulo: "Avatar: Fogo e Cinzas", img: "./imagens/avatarFogo.jpg", nota: "7.4" },
        { titulo: "Wicked 2", img: "./imagens/wicked2.jpg", nota: "7.0" },
        { titulo: "O Diabo Veste Prada 2", img: "imagens/vestePrada.jpg ", nota: "7.8"},
        { titulo: "Marty Supreme", img: "./imagens/martySupreme.jpg", nota: "7.5" },
        { titulo: "Minions 3", img: "./imagens/minions3.jpg", nota: "8.0" },
        { titulo: "The Super Mario Galaxy", img: "./imagens/marioSuper.jpg", nota: "7.9" },
        { titulo: "Pânico 7", img: "./imagens/panico7.jpg", nota: "7.2" },
        { titulo: "O Beijo da Mulher Aranha", img: "./imagens/oBeijo.jpg", nota: "7,6" },
    ],
    acao: [
        { titulo: "Stranger Thinks", img: "strangerCapa.jpg", nota: "7.8"},
        { titulo: "Warcraft", img: "warcraft.jpg", nota: "7.9" },
        { titulo: "Star Wars", img: "starwars.jpg", nota: "8.5" },
    ]
}

function renderFilmes(cat) {
    const card = document.querySelectorAll('.rec');
    const lista = filmes[cat];

    card.forEach((card, i) => {

        if (!lista[i]) {

            card.style.display = 'none';
            return;
        }

        card.style.display = '';
        card.querySelector("img").src = lista[i].img;
        card.querySelector(".titulo").textContent = lista[i].titulo;
        card.querySelector(".nota").textContent = `⭐${lista[i].nota}`;
        card.querySelector("img").alt = `Capa do filme: ${lista[i].titulo}`;
        
    })
}

const categorias = document.querySelector('.fil-rec');
    if(categorias){

    categorias.addEventListener('click', (e) => {
    const li = e.target.closest('li'); 
    
    if(!li) return;
    
    const categoria = li.dataset.cat

    renderFilmes(categoria);
})} /* closest - A partir de onde o clique aconteceu, encontre o <li> mais próximo acima */ 

window.addEventListener("load", () => renderFilmes("recomendados"));

// Menu Mobile

const hamb = document.querySelector('.menu-hamb');
const menu = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.menu-overlay');

    if(hamb && menu && overlay){
    hamb.addEventListener('click', () => {
        menu.classList.toggle('active'); // Toggle, utilizado para alterar uma classe entre estar presente ou não no elemento.
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    })
    }

// Mobile, botões de categorias

const filCategorias = document.querySelectorAll('[data-cat]');

filCategorias.forEach((listaCategorias) => {

    listaCategorias.addEventListener('click', () => {

        filCategorias.forEach((e) => {
            e.classList.remove('active')
        })

        listaCategorias.classList.add('active')
        
        /* console.log(listaCategorias.dataset.cat) */
    })
})
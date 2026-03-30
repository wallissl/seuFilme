// Categorias dos filmes
const filmes = {
    recomendados: [
        { titulo: "Socorro", img: "./imagens/novidades/n1.jpg", nota: "7.2"},
        { titulo: "Zootopia 2", img: "./imagens/novidades/n2.jpg", nota: "7.4" },
        { titulo: "Lago dos Ossos", img: "./imagens/novidades/n3.jpg", nota: "5.6" },
        { titulo: "O Morro dos Ventos Uivantes", img: "./imagens/novidades/n4.jpg", nota: "6.3" },
        { titulo: "Avatar: Fogo e Cinzas", img: "./imagens/novidades/n5.jpg", nota: "7.4" },
        { titulo: "Wicked 2", img: "././imagens/novidades/n6.jpg", nota: "6.7" },
        { titulo: "O Diabo Veste Prada 2", img: "./imagens/novidades/n7.jpg ", nota: "Em breve"},
        { titulo: "Marty Supreme", img: "./imagens/novidades/n8.jpg", nota: "7.9" },
        { titulo: "Minions 3", img: "./imagens/novidades/n9.jpg", nota: "Em breve" },
        { titulo: "The Super Mario Galaxy", img: "./imagens/novidades/n10.jpg", nota: "Em breve" },
        { titulo: "Pânico 7", img: "./imagens/novidades/n11.jpg", nota: "6.3" },
        { titulo: "O Beijo da Mulher Aranha", img: "./imagens/novidades/n12.jpg", nota: "5,7" },
    ],
    acao: [
        { titulo: "F1: O Filme", img: "./imagens/acao/1.jpg", nota: "7.6"},
        { titulo: "Pecadores", img: "./imagens/acao/2.jpg", nota: "7.5"},
        { titulo: "Avatar: Fogo e Cinzas", img: "./imagens/acao/3.jpg", nota: "7.4" },
        { titulo: "Predador: Assassino de Assassinos", img: "./imagens/acao/4.jpg", nota: "7.4" },
        { titulo: "Superman", img: "./imagens/acao/5.jpg", nota: "7.0" },
        { titulo: "The Wrecking Crew", img: "./imagens/acao/6.jpg", nota: "6.4" },
        { titulo: "Deadpool & Wolverine", img: "./imagens/acao/7.jpg", nota: "7.7" },
        { titulo: "Furiosa: Uma Saga Mad Max", img: "./imagens/acao/8.jpg", nota: "7.5" },
        { titulo: "Transformers: O Início", img: "./imagens/acao/9.jpg", nota: "7.6" },
        { titulo: "Capitão América: Guerra Civil", img: "./imagens/acao/10.jpg", nota: "7.8" },
        { titulo: "Bad Boys: Até o Fim", img: "./imagens/acao/11.jpg", nota: "6.7" },
        { titulo: "Beekeeper - Rede de Vingança", img: "./imagens/acao/12.jpg", nota: "6.4" },
    ],
    comedia: [
        { titulo: "Divertida Mente 2", img: "./imagens/comedia/1.jpg", nota: "7.6"},
        { titulo: "Beetlejuice Beetlejuice", img: "./imagens/comedia/2.jpg", nota: "6.7"},
        { titulo: "Kneecap", img: "./imagens/comedia/3.jpg", nota: "7.5" },
        { titulo: "Jackpot: Loteria Mortal!", img: "./imagens/comedia/4.jpg", nota: "6.2" },
        { titulo: "A Verdadeira Dor", img: "./imagens/comedia/5.jpg", nota: "7.1" },
        { titulo: "Wonka", img: "./imagens/comedia/6.jpg", nota: "7.0" },
        { titulo: "O Homem dos Sonhos", img: "./imagens/comedia/7.jpg", nota: "6.9" },
        { titulo: "Problemista", img: "./imagens/comedia/8.jpg", nota: "6.8" },
        { titulo: "Bottoms", img: "./imagens/comedia/9.jpg", nota: "6.7" },
        { titulo: "Babes", img: "./imagens/comedia/10.jpg", nota: "6.5" },
        { titulo: "O Dublê", img: "./imagens/comedia/11.jpg", nota: "6.9" },
        { titulo: "Amigos Imaginários", img: "./imagens/comedia/12.jpg", nota: "6.5" },
    ],
    suspense: [
        { titulo: "Mickey 17", img: "./imagens/suspense/1.jpg", nota: "7.8"},
        { titulo: "28 Years Later", img: "./imagens/suspense/2.jpg", nota: "7.4"},
        { titulo: "Longlegs: Vínculo Mortal ", img: "./imagens/suspense/3.jpg", nota: "6.7" },
        { titulo: "Armadilha (Trap)", img: "./imagens/suspense/4.jpg", nota: "6.7" },
        { titulo: "Não Fale o Mal", img: "./imagens/suspense/5.jpg", nota: "6.9" },
        { titulo: "Blink Twice (Pisque Duas Vezes)", img: "./imagens/suspense/6.jpg", nota: "6.6" },
        { titulo: "Instinto Materno", img: "./imagens/suspense/7.jpg", nota: "6.3" },
        { titulo: "Tipos de Gentileza", img: "./imagens/suspense/8.jpg", nota: "7.0" },
        { titulo: "O Mal Que Nos Habita", img: "./imagens/suspense/9.jpg", nota: "7.0" },
        { titulo: "Conclave (2024)", img: "./imagens/suspense/10.jpg", nota: "7.5" },
        { titulo: "Wolfs (2024)", img: "./imagens/suspense/11.jpg", nota: "6.5" },
        { titulo: "Rebel Ridge (2024)", img: "./imagens/suspense/12.jpg", nota: "6.8" },
    ],
    drama: [
        { titulo: "O Morro dos Ventos Uivantes", img: "./imagens/drama/1.jpg", nota: "7.9"},
        { titulo: "A Incrível Eleanor", img:"./imagens/drama/2.jpg", nota: "7.3"},
        { titulo: "Valor Sentimental", img: "./imagens/drama/3.jpg", nota: "7.6" },
        { titulo: "O Agente Secreto", img: "./imagens/drama/4.jpg", nota: "7.4" },
        { titulo: "Foi Apenas um Acidente", img: "./imagens/drama/5.jpg", nota: "7.0" },
        { titulo: "Vidas Passadas", img: "./imagens/drama/6.jpg", nota: "7.8" },
        { titulo: "A Ghost Story", img: "./imagens/drama/7.jpg", nota: "7.2" },
        { titulo: "Maria", img: "./imagens/drama/8.jpg", nota: "6.8" },
        { titulo: "O Brutalista", img: "./imagens/drama/9.jpg", nota: "7.9" },
        { titulo: "Ainda Estou Aqui", img: "./imagens/drama/10.jpg", nota: "8.1" },
        { titulo: "Anora", img: "./imagens/drama/11.jpg", nota: "7.7" },
        { titulo: "A Menina e o Dragão", img: "./imagens/drama/12.jpg", nota: "6.9" },
    ],
    terror: [
        { titulo: "A Substância", img: "./imagens/terror/1.jpg", nota: "7.5"},
        { titulo: "Wolf Man", img:"./imagens/terror/2.jpg", nota: "6.8"},
        { titulo: "Thread: Insidious", img: "./imagens/terror/3.jpg", nota: "6.5" },
        { titulo: "Extermínio: O Templo dos Ossos", img: "./imagens/terror/4.jpg", nota: "7.4" },
        { titulo: "Sorria 2", img: "./imagens/terror/5.jpg", nota: "6.9" },
        { titulo: "Terrifier 3", img: "./imagens/terror/6.jpg", nota: "6.8" },
        { titulo: "Nosferatu", img: "./imagens/terror/7.jpg", nota: "7.8" },
        { titulo: "Abigail", img: "./imagens/terror/8.jpg", nota: "6.6" },
        { titulo: "Um Lugar Silencioso: Dia Um", img: "./imagens/terror/9.jpg", nota: "6.6" },
        { titulo: "Imaculada", img: "./imagens/terror/10.jpg", nota: "5.8" },
        { titulo: "Alien: Romulu", img: "./imagens/terror/11.jpg", nota: "7.2" },
        { titulo: "A Primeira Profecia", img: "./imagens/terror/12.jpg", nota: "6.5" },
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
})} /* Closest - A partir de onde o clique aconteceu, encontre o <li> mais próximo acima */ 

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
    })
})
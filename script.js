
// Categorias dos filmes

const filmes = {
    recomendados: [
        
        { titulo: "Stranger Thinks", img: "./imagens/strangerCapa.jpg", nota: "7.8"},
        { titulo: "Warcraft", img: "./imagens/zootopia.jpg", nota: "7.9" },
        { titulo: "Warcraft", img: "./imagens/theBeast.jpg", nota: "7.9" },
        { titulo: "Warcraft", img: "./imagens/pluribus.jpg", nota: "7.9" },
        { titulo: "Warcraft", img: "./imagens/avatarFogo.jpg", nota: "7.9" },
        { titulo: "Warcraft", img: "./imagens/wicked2.jpg", nota: "7.9" }
    ],
    acao: [
        
        { titulo: "Stranger Thinks", img: "strangerCapa.jpg", nota: "7.8"},
        { titulo: "Warcraft", img: "warcraft.jpg", nota: "7.9" },
        { titulo: "Star Wars", img: "starwars.jpg", nota: "8.5" }
    ]
}

/* document.querySelector("#categorias") */

function renderFilmes(cat) {
    const card = document.querySelectorAll('.rec');
    const lista = filmes[cat];

    card.forEach((card, i) => {
        const filme = lista[i];

        card.style.backgroundImage = `url("${filme.img}")`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.title = filme.titulo
    })
}

window.addEventListener("load", () => renderFilmes("recomendados"))
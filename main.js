window.onload = () => {
    init();
}

function init() {
    domCreate();
    assignRandomPokeball();
    applyHandlers();
}

function domCreate() {
    for (let i = 0; i < 4; i++) {
        const pokeball = document.createElement("img");
        pokeball.classList.add("pokeball");
        pokeball.src = "images/pokeball.png";
        document.querySelector('.pokeballs .col').appendChild(pokeball);

    }
}

function assignRandomPokeball() {

}

function applyHandlers() {
    const pokeballs = document.querySelectorAll(".pokeball");
    pokeballs.forEach(pokeball => {
        
    })
}


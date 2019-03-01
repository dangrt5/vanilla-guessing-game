window.onload = () => {
    init();
}

function init() {
    domCreate();
}

function domCreate() {
    for (let i = 0; i < 7; i++) {
        const pokeball = document.createElement("img");
        pokeball.src = "images/pokeball.png";
        document.querySelector('.pokeballs .col').appendChild(pokeball);

    }
}


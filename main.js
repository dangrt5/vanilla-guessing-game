window.onload = () => {
    const guessingGame = new GuessingGame;
    guessingGame.init();
}

class GuessingGame {
    constructor() {
        this.randomNumber = null;
    }

    init = () => {
        this.randomizeNumber();
        this.applyHandlers();
    }

    randomizeNumber = () => {
        this.randomNumber = Math.floor((Math.random() * 100) + 1);
    }

    applyHandlers = () => {
        document.querySelector("#submit-button").addEventListener("click", this.submitButtonHandler);
        document.querySelector("#reset-button").addEventListener("click", this.resetButtonHandler);
    }

    submitButtonHandler = e => {
        let inputValue = parseInt(document.querySelector("#guess-input").value);
        let resultText = document.querySelector(".result");
        let result = "";
        e.preventDefault();

        if (inputValue < this.randomNumber) {
            result = "Too Low";
        } else if (inputValue > this.randomNumber) {
            result = "Too High";
        } else {
            result = "Correct!";
        }

        resultText.textContent = result;
    }

    resetButtonHandler = e => {
        e.preventDefault();
        document.querySelector("#guess-input").value = "";
        document.querySelector(".result").textContent = "";
    }
}
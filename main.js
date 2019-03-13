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
        e.preventDefault();
        let inputValue = parseInt(document.querySelector("#guess-input").value);
        if (!inputValue) return;
        let resultText = document.querySelector(".result");
        let result = "";

        if (inputValue < this.randomNumber) {
            result = "Too Low";
        } else if (inputValue > this.randomNumber) {
            result = "Too High";
        } else {
            result = "Correct!";
        }
        resultText.textContent = result;

        document.querySelector("#guess-input").value = "";
        this.addToHistory(inputValue, resultText.textContent);
    }

    resetButtonHandler = e => {
        e.preventDefault();
        document.querySelector("#guess-input").value = "";
        document.querySelector(".result").textContent = "";
        document.querySelector(".all-history").innerHTML = "";
        this.randomizeNumber();
    }

    addToHistory = (value, result) => {
        if (!value || !result) return;
        const historyText = document.createElement("h3");
        historyText.classList.add("text-center");
        historyText.textContent = `${value} - ${result}`;
        document.querySelector(".all-history").appendChild(historyText);
    }

}
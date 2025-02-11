const buttons = document.querySelectorAll(".numberButton");
const result = document.getElementById("result");

buttons.forEach(buttons => buttons.addEventListener('click', (e) => checkAnswer(e)))

function generateNumber() {
        return Math.floor(Math.random() * 6 + 1);
}

function disableButtons(option) {
        buttons.forEach(buttons => {
                buttons.disabled = option;
                buttons.classList.add('disabledHover')
        })
}

function colorCorrectAnswerButton(number) {
        buttons.forEach(buttons => {
                if (Number(buttons.innerText) == number) {
                        buttons.classList.add("won");
                }
        })
}


function checkAnswer(e) {
        disableButtons(true);
        const number = generateNumber();

        colorCorrectAnswerButton(number)

        const userChosenNumber = Number(e.target.innerText);

        console.log(number, userChosenNumber);

        if (number == userChosenNumber) {
                result.innerText = ('you won')
                result.style.color = '#B8D576';
                e.target.classList.add('won');
        } else {
                result.innerText = ('you lost')
                e.target.classList.add('lose');
                result.style.color = '#D70654';
        }

        setTimeout(() => resetGame(), 1500);
}

function resetGame() {
        disableButtons(false);
        buttons.forEach(buttons => {
                buttons.classList.remove('lose', 'won', 'disabledHover');
        })
        result.innerText = 'Guess the number'
        result.style.color = '#4635B1'
}
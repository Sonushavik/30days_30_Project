let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];
let highestScore = document.querySelector(".highestScore");
let maxScore = highestScore.innerText;
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function maxScoreUpdate(level){
        let score = level;
        maxScore = Math.max(maxScore,score);
        highestScore.innerText = maxScore;
}

function levelUp() {
    userSeq = []; // Reset user sequence for the new level
    level++;
    maxScoreUpdate(level);


    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    gameFlash(randomBtn);
    console.log("Game Sequence:", gameSeq);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000); // Proceed to next level
        }
    } else {
        h2.innerHTML = `<h2 style = "color: green">Game Over! Your score was <b>${level}</h1></b><br>Press any key to restart.`;
        document.querySelector("body").style.background = "#8E1616";
        setTimeout(() => {
            document.querySelector("body").style.background = "#2A004E";
        }, 500);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log("User Sequence:", userSeq);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

    document.addEventListener("keypress", function () {
        if (!started) {
            started = true;
            levelUp();
        }
    }, { once: true }); // Ensures only one event listener is added
}

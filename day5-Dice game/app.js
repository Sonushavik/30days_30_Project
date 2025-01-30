const p1Img = document.getElementById("p1Img");
const p2Img = document.getElementById("p2Img");
const messageEle = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const p1ScoreEle = document.getElementById("p1Score");
const p2ScoreEle = document.getElementById("p2Score");
const tossSound = document.getElementById('tossSound');
let message = "";

let p1Rolls = [];
let p2Rolls = [];
let turn = 0;
// let diff=0;

function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function clickHandler() {
  if (turn >= 6) return;

  // Play the coin toss sound
  tossSound.currentTime = 0; // Reset the sound to the start
  tossSound.play();
  
  let roll = getRandomDiceNumber();
  console.log(p1Img.src);

  if (turn % 2 === 0) {
    rollBtn.innerText = "Player 2 Turn";
    p1Img.style.transition = "transform 0.5s ease-in-out";
    p1Img.style.transform = "rotateY(360deg)";
    setTimeout(() => {
      p1Rolls.push(roll);
      p1Img.src = p1Img.src.split("dice")[0] + "dice" + roll + ".png";
      p1ScoreEle.innerText = `Score: ${p1Rolls.join(", ")}`;
      p1Img.style.transform = "rotateY(0deg)";
    }, 300);
    p2Img.style.transform = "";
  } else {
    rollBtn.innerText = "Player 1 Turn";
    p2Img.style.transition = "transform 0.5s ease-in-out";
    p2Img.style.transform = "rotateY(360deg)";
    setTimeout(() => {
      p2Rolls.push(roll);
      p2Img.src = p2Img.src.split("dice")[0] + "dice" + roll + ".png";
      p2ScoreEle.innerText = `Score: ${p2Rolls.join(", ")}`;
      p2Img.style.transform = "rotateY(0deg)";
    }, 300);
    p1Img.style.transform = "";
  }

  turn++;

  if (turn === 6) {
    rollBtn.innerText = "Resart";
    setTimeout(() => {
      let p1Total = p1Rolls.reduce((a, b) => a + b, 0);
      let p2Total = p2Rolls.reduce((a, b) => a + b, 0);
      let diff = Math.abs(p1Total - p2Total);
      console.log(`Player 1 Total: ${p1Total}`);
      console.log(`Player 2 Total: ${p2Total}`);
      console.log(`Difference: ${diff}`);

      if (p1Total > p2Total) {
        messageEle.innerText = `Player 1 score ${p1Total} and wins with ${diff} scrore!`;
      } else if (p1Total < p2Total) {
        messageEle.innerText = `Player 2 score ${p2Total} and wins with ${diff} scrore!`;
      } else {
        messageEle.innerText = `It's a Draw! Both scored ${p1Total}`;
      }

      messageEle.style.display = "block";
      rollBtn.disabled = false;
      rollBtn.onclick = () => restartGame();
      // turn = 0;
    }, 100);
  }
}

function restartGame() {
  turn = 0;
  p1Rolls = [];
  p2Rolls = [];
  messageEle.style.display = "none";
  p1ScoreEle.innerText = "score: ";
  p2ScoreEle.innerText = "score ";
  p1Img.src = "images/dice1.png";
  p2Img.src = "images/dice1.png";
  rollBtn.innerText = "Roll Dice";
  rollBtn.onclick = clickHandler;
}

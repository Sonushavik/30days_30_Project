const boxes = document.querySelectorAll(".box");
const resultText = document.getElementById("resultText");
const restartbtn = document.getElementById("restartbtn");
let isSquare = false;
let gameOver = false;

// Add event listeners once
restartbtn.addEventListener("click", restartHandler);

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", (e) => checkResult(e));
}

function checkResult(e) {
         if(gameOver) return;
  if (e.target.children.length < 1) {
    if (isSquare) {
      e.target.innerHTML =
        '<h1 onclick="bubblingHandler(event)" class="text-9xl text-gray-400 font-thin">x</h1>';
      isSquare = false;
    } else {
      e.target.innerHTML =
        '<div onclick="bubblingHandler(event)" class="border-4 rounded-full w-[70%] h-[70%] flex justify-center items-center"></div>';
      isSquare = true;
    }
  }

  if (isFilled()) {
    if (!isComplete()) {
      resultText.innerText = "Draw";
      gameOver = true;
      setTimeout(() => {
        restartbtn.addEventListener("click", restartHandler, { once: true });
      }, 2000);
    }
  }

  if (isComplete()) {
    resultText.innerText = isSquare ? "Circle wins" : "Cross wins";
    gameOver = true;
    setTimeout(() => {
        restartbtn.addEventListener("click", restartHandler, { once: true });
      }, 2000);
  }
}

function isFilled() {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].children.length === 0) {
      return false; // If any box is empty, return false
    }
  }
  return true; // All boxes are filled
}

function isComplete() {
  if (
    a1.children.length > 0 &&
    a1.innerHTML === b1.innerHTML &&
    b1.innerHTML === c1.innerHTML
  ) {
    return true;
  } else if (
    a2.children.length > 0 &&
    a2.innerHTML === b2.innerHTML &&
    b2.innerHTML === c2.innerHTML
  ) {
    return true;
  } else if (
    a3.children.length > 0 &&
    a3.innerHTML === b3.innerHTML &&
    b3.innerHTML === c3.innerHTML
  ) {
    return true;
  } else if (
    a1.children.length > 0 &&
    a1.innerHTML === a2.innerHTML &&
    a2.innerHTML === a3.innerHTML
  ) {
    return true;
  } else if (
    b1.children.length > 0 &&
    b1.innerHTML === b2.innerHTML &&
    b2.innerHTML === b3.innerHTML
  ) {
    return true;
  } else if (
    c1.children.length > 0 &&
    c1.innerHTML === c2.innerHTML &&
    c2.innerHTML === c3.innerHTML
  ) {
    return true;
  } else if (
    a1.children.length > 0 &&
    a1.innerHTML === b2.innerHTML &&
    b2.innerHTML === c3.innerHTML
  ) {
    return true;
  } else if (
    a3.children.length > 0 &&
    a3.innerHTML === b2.innerHTML &&
    b2.innerHTML === c1.innerHTML
  ) {
    return true;
  }

  return false; // Return false when no win condition is met
}

function clearGame() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
  isSquare = false; // Reset player
}

function restartHandler() {
  resultText.innerText = "";
  clearGame();
  gameOver = false;
}

const coin = document.querySelector("#coin");
const result = document.querySelector("#result");
const btn = document.querySelector("#btn");
const tossSound = document.getElementById('tossSound');

function tossHandler(){
        
        // Play the coin toss sound
      tossSound.currentTime = 0; // Reset the sound to the start
      tossSound.play();

        coin.style.transform = 'rotateY(720deg)';
        setTimeout(() => {
                const toss = Math.random() < 0.5 ? 'Heads' : 'Tails';

                coin.textContent = toss === 'Heads' ? '🙂' : '🐔';

                result.textContent = toss;

                coin.style.transform = '';
                btn.innerText = 'Toss-again';
        }, 600);
}
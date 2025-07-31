let score1 = 0;
let score2 = 0;
const maxScore = 30;

const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const winnerEl = document.getElementById('winner');

document.addEventListener('keydown', (e) => {
  if (winnerEl.classList.contains('hidden')) {
    if (e.key.toLowerCase() === 'a') {
      score1++;
      score1El.textContent = score1;
      checkWin();
    } else if (e.key.toLowerCase() === 'l') {
      score2 += 2;
      score2El.textContent = score2;
      checkWin();
    }
  }
});

function checkWin() {
  if (score1 >= maxScore) {
    showWinner('Player 1 🅰️ wins!');
  } else if (score2 >= maxScore) {
    showWinner('Player 2 🇱 wins!');
  }
}

function showWinner(message) {
  winnerEl.textContent = message;
  winnerEl.classList.remove('hidden');

  // Play raccoon chitter sound
  const chitter = document.getElementById('raccoon-chitter');
  if (chitter) {
    chitter.currentTime = 0;
    chitter.play();
  }
  // Launch confetti
  raccoonConfetti();
}


function raccoonConfetti() {
  const confettiCount = 600;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = '🐾';
    confetti.style.position = 'fixed';
    confetti.style.zIndex = 9999;
    confetti.style.fontSize = `${Math.random() * 25 + 15}px`;
    confetti.style.left = `${Math.random() * window.innerWidth}px`;

    // Randomize starting vertical position between -100px and 0 (above the viewport)
    confetti.style.top = `${-100 - Math.random() * 200}px`; 

    confetti.style.opacity = 1;
    confetti.style.transition = 'transform 2s ease-out, opacity 2s ease-out';

    document.body.appendChild(confetti);

    requestAnimationFrame(() => {
      confetti.style.transform = `translate(${(Math.random() - 0.5) * 300}px, ${window.innerHeight + 40}px) rotate(${Math.random() * 720}deg)`;
      confetti.style.opacity = 0;
    });

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}


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
      score2++;
      score2El.textContent = score2;
      checkWin();
    }
  }
});

function checkWin() {
  if (score1 >= maxScore) {
    showWinner('Sharacoon wins!');
  } else if (score2 >= maxScore) {
    showWinner('Olicoon wins!');
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
  const confettiCount = 100;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = '🐾';
    confetti.style.position = 'fixed';
    confetti.style.zIndex = 9999;
    confetti.style.fontSize = `${Math.random() * 35 + 30}px`; // larger size
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.top = `${-100 - Math.random() * 200}px`; 
    confetti.style.opacity = 2;
    confetti.style.transition = 'transform 2s ease-out, opacity 2s ease-out';
    confetti.style.filter = 'contrast(150%) brightness(120%)'; // boost visibility

    document.body.appendChild(confetti);

    requestAnimationFrame(() => {
      confetti.style.transform = `translate(${(Math.random() - 0.5) * 600}px, ${window.innerHeight + 40}px) rotate(${Math.random() * 720}deg)`; // more spread
      confetti.style.opacity = 0;
    });

    setTimeout(() => {
      confetti.remove();
    }, 8000);
  }
}


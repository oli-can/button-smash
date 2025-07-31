let score1 = 0;
let score2 = 0;
const maxScore = 100;

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
    showWinner('Player 1 🅰️ wins!');
  } else if (score2 >= maxScore) {
    showWinner('Player 2 🇱 wins!');
  }
}

function showWinner(message) {
  winnerEl.textContent = message;
  winnerEl.classList.remove('hidden');
}

const player1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  text: document.querySelector("#p1"),
};
const player2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  text: document.querySelector("#p2"),
};
const gameInfo = {
  scoreSelector: document.querySelector("#playTo"),
  winningScore: 3,
  isGameOver: false,
  resetButton: document.querySelector("#reset"),
};

function updateScore(player, opponent) {
  if (!gameInfo.isGameOver) {
    player.score++;
    if (player.score === gameInfo.winningScore) {
      gameInfo.isGameOver = true;
      player.text.classList.add("has-text-success");
      opponent.text.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.text.innerText = player.score;
  }
}
// const winningScoreSelect = document.querySelector("#playTo");

// const reset = document.querySelector("#reset");

// let winningScore = parseInt(winningScoreSelect.value);

// let isGameOver = false;

const resetFunc = () => {
  for (const p of [player1, player2]) {
    p.score = 0;
    p.text.innerText = p.score;
    p.text.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
  gameInfo.isGameOver = false;
};

player1.button.addEventListener("click", function () {
  updateScore(player1, player2);
});

player2.button.addEventListener("click", function () {
  updateScore(player2, player1);
});

gameInfo.scoreSelector.addEventListener("change", function () {
  gameInfo.winningScore = parseInt(this.value);
  resetFunc();
});

gameInfo.resetButton.addEventListener("click", resetFunc);

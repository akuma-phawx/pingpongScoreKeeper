const p1 = document.querySelector("#p1");

const p2 = document.querySelector("#p2");

const winningScoreSelect = document.querySelector("#playTo");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

let winningScore = parseInt(winningScoreSelect.value);
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

const resetFunc = () => {
  p1Score = 0;
  p2Score = 0;
  p1.innerText = p1Score;
  p2.innerText = p2Score;
  isGameOver = false;
  p1.classList.remove("has-text-success", "has-text-danger");
  p2.classList.remove("has-text-success", "has-text-danger");
};

p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1.classList.add("has-text-success");
      p2.classList.add("has-text-danger");
    }
    p1.innerText = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2.classList.add("has-text-success");
      p1.classList.add("has-text-danger");
    }
    p2.innerText = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetFunc();
});

reset.addEventListener("click", resetFunc);

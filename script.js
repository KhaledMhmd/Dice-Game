const firstPlayerCard = document.querySelector(".firstPlayerCard");
const secondPlayerCard = document.querySelector(".secondPlayerCard");
const diceImage = document.querySelector(".dice");
const totalFirstPlayer = document.querySelector(".totalScoreFirst");
const totalSecondPlayer = document.querySelector(".totalScoreSecond");
const currentScoreFirstPlayer = document.querySelector(".currentFirst");
const currentScoreSecondPlayer = document.querySelector(".currentSecond");
const newGameButton = document.querySelector(".newGame");
const rollDiceButton = document.querySelector(".rollDice");
const holdScoreButton = document.querySelector(".hold");
const currentScoreFirstContainer = document.querySelector(".currentScoreFirst");
const currentScoreSecondContainer = document.querySelector(
  ".currentScoreSecond"
);
const firstPlayerName = document.querySelector(".firstPlayerName");
const secondPlayerName = document.querySelector(".secondPlayerName");
let firstPlayerActive = true;

function rollsDice() {
  if (
    Number(totalFirstPlayer.innerHTML) < 100 &&
    Number(totalSecondPlayer.innerHTML) < 100
  ) {
    diceImage.classList.remove("hidden");
    let generatedNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.src = "dice" + generatedNumber + ".png";
    if (firstPlayerActive === true) {
      if (generatedNumber !== 1) {
        currentScoreFirstPlayer.innerHTML =
          Number(currentScoreFirstPlayer.innerHTML) + generatedNumber;
      } else {
        currentScoreFirstPlayer.innerHTML = 0;
        firstPlayerActive = false;
      }
    } else {
      if (generatedNumber !== 1) {
        currentScoreSecondPlayer.innerHTML =
          Number(currentScoreSecondPlayer.innerHTML) + generatedNumber;
      } else {
        currentScoreSecondPlayer.innerHTML = 0;
        firstPlayerActive = true;
      }
    }
    if (firstPlayerActive === true) {
      secondPlayerCard.classList.add("opacity");
      firstPlayerCard.classList.remove("opacity");
    } else {
      firstPlayerCard.classList.add("opacity");
      secondPlayerCard.classList.remove("opacity");
    }
  }
}

function holdsScore() {
  if (firstPlayerActive === true) {
    totalFirstPlayer.innerHTML =
      Number(totalFirstPlayer.innerHTML) +
      Number(currentScoreFirstPlayer.innerHTML);
    currentScoreFirstPlayer.innerHTML = 0;
    if (totalFirstPlayer.innerHTML >= 100) {
      firstPlayerCard.classList.add("winner");
      currentScoreFirstContainer.classList.add("hidden");
      firstPlayerName.innerHTML = "PLAYER 1 WINS!";
      firstPlayerName.style.color = "#F1F1EC";
    } else {
      firstPlayerActive = false;
      firstPlayerCard.classList.add("opacity");
      secondPlayerCard.classList.remove("opacity");
    }
  } else {
    totalSecondPlayer.innerHTML =
      Number(totalSecondPlayer.innerHTML) +
      Number(currentScoreSecondPlayer.innerHTML);
    currentScoreSecondPlayer.innerHTML = 0;
    if (totalSecondPlayer.innerHTML >= 100) {
      secondPlayerCard.classList.add("winner");
      currentScoreSecondContainer.classList.add("hidden");
      secondPlayerName.innerHTML = "PLAYER 2 WINS!";
      secondPlayerName.style.color = "#F1F1EC";
    } else {
      firstPlayerActive = true;
      secondPlayerCard.classList.add("opacity");
      firstPlayerCard.classList.remove("opacity");
    }
  }
}
function newGame() {
  firstPlayerCard.classList.remove("winner");
  secondPlayerCard.classList.remove("winner");
  firstPlayerName.style.color = "Black";
  secondPlayerName.style.color = "Black";
  totalFirstPlayer.innerHTML = 0;
  totalSecondPlayer.innerHTML = 0;
  currentScoreFirstContainer.classList.remove("hidden");
  currentScoreSecondContainer.classList.remove("hidden");
  currentScoreFirstPlayer.innerHTML = 0;
  currentScoreSecondPlayer.innerHTML = 0;
  firstPlayerActive = true;
  secondPlayerCard.classList.add("opacity");
  firstPlayerCard.classList.remove("opacity");
  diceImage.classList.add("hidden");
}

rollDiceButton.addEventListener("click", rollsDice);
holdScoreButton.addEventListener("click", holdsScore);
newGameButton.addEventListener("click", newGame);

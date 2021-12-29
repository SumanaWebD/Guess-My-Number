"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guessing").value);
  console.log(guess);

  // When there is no guess
  if (!guess) {
    displayMessage("No Number !");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number !");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".heading").textContent = "YAY ! Winner";
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "25rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High !" : "Too Low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Yoy Lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guessing").value = "";

  document.querySelector("body").style.backgroundImage = "url('../img/bg.jpg')";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundAttachment = "fixed";
  document.querySelector("body").style.backgroundPosition = "center";
  document.querySelector("body").style.backgroundSize = "cover";
});

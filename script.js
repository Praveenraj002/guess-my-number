"use strict";

// GUESS THE NUMBER : DOM PROJECT #1

// // Before changing
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// // After Changing
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage  = (message) => {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //  when there is NO INPUT
  if (guess == 0) {
    document.querySelector(".message").textContent = "No number!";
    displayMessage("No Number!");

    // When player WINS
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore){
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber){
     if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!": "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }


  //   //  when guess is TOO HIGH
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //  when guess is TOO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// When user clicks "again" all should reset:
document.querySelector(".again").addEventListener("click", function (){
  // Score should reassign to 20
  // score = 20;
  // Revoke the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // // Change the message content
  displayMessage("Start Guessing...");
  // // Reset the score
  document.querySelector(".score").textContent = "20";
  // // ? Guess Number
  document.querySelector(".number").textContent = "?";
  // // Change the checking value to Null/ Empty
  document.querySelector(".guess").value = "";
  // CSS - Change the background color
  document.querySelector("body").style.backgroundColor = "#222";
  // Width of the guess Number
  document.querySelector(".number").style.width = "15rem";
});
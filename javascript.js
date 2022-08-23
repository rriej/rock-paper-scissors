"use strict";

// Generates random choice between rock, paper and scissors
function getComputerChoice() {
  let choice = "";
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  switch (random(1, 4)) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
  }
  return choice;
}

function getPlayerChoice() {
  let input = prompt("Type rock, paper or scissors");
  return input;
}

//Plays one round of RPS and returns winner as a string ("player" or "computer")
function oneRound() {
  const pChoice = getPlayerChoice().toLowerCase();
  const cChoice = getComputerChoice().toLowerCase();
  let winner = "";

  if (pChoice === cChoice) {
    console.log(`Even round! Both players choose ${pChoice}!`);
  } else if (pChoice === "rock" && cChoice === "scissors") {
    console.log(`You win! ${pChoice} beats ${cChoice}!`);
    winner = "player";
  } else if (pChoice === "paper" && cChoice === "rock") {
    console.log(`You win! ${pChoice} beats ${cChoice}!`);
    winner = "player";
  } else if (pChoice === "scissors" && cChoice === "paper") {
    winner = "player";
    console.log(`You win! ${pChoice} beats ${cChoice}!`);
  } else {
    winner = "computer";
    console.log(`You lose! ${cChoice} beats ${pChoice}!`);
  }
  return winner;
}

//Plays five rounds of RPS and logs the winner
function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let winner = "";
  for (let i = 0; i < 5; i++) {
    winner = oneRound();
    if (winner === "player") {
      playerPoints++;
    } else if (winner === "computer") {
      computerPoints++;
    }
  }

  if (playerPoints > computerPoints) {
    console.log(`Player won with ${playerPoints} points!`);
  } else if (playerPoints < computerPoints) {
    console.log(`Computer won with ${computerPoints} points!`);
  } else if (playerPoints === computerPoints) {
    console.log("It's a tie!");
  }
}

game();

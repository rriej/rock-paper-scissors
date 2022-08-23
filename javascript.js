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

//Plays one round of RPS
function oneRound(playerSelection, computerSelection) {
  const pChoice = playerSelection.toLowerCase();
  const cChoice = computerSelection.toLowerCase();
  console.log(pChoice, cChoice);
}

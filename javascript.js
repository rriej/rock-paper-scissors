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

//Plays one round of RPS and returns winner as a string ("player" or "computer")
function oneRound(playerSelection, computerSelection) {
  const pChoice = playerSelection.toLowerCase();
  const cChoice = computerSelection.toLowerCase();
  let winner = "";

  if (pChoice === cChoice) {
    console.log(`Even round! Both players choose ${pChoice}`);
  } else if (pChoice === "rock" && cChoice === "scissors") {
    console.log(`You win! ${pChoice} beats ${cChoice}`);
    winner = "player";
  } else if (pChoice === "paper" && cChoice === "rock") {
    console.log(`You win! ${pChoice} beats ${cChoice}`);
    winner = "player";
  } else if (pChoice === "scissors" && cChoice === "paper") {
    winner = "player";
    console.log(`You win! ${pChoice} beats ${cChoice}`);
  } else {
    winner = "computer";
    console.log(`You lose! ${cChoice} beats ${pChoice}`);
  }
  return winner;
}

const playerChoice = "rock";
console.log(oneRound(playerChoice, getComputerChoice()));

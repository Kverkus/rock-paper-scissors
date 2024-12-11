let humanScore = 0;
let computerScore = 0; 

playRound(getHumanChoice(), getComputerChoice());

function playRound (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw, you and your opponents chose ${humanChoice}.`);
  }
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
    humanScore += 1;
  }
  else {
    console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
    computerScore += 1;
  }
}

function getHumanChoice () {
  let choice;
  let isChoiceDone = false;

  while (isChoiceDone !== true) {
    choice = prompt("Choose rock, paper or scissors.", "rock");
    choice = choice.toLowerCase;

    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      alert("Incorrect choice. You must choose only rock, paper or scissors.");
    }
    else {
      isChoiceDone = true;
    }
  }
  return choice;
}

function getComputerChoice () {
  let roll = getRandomInt(3);
  let choice;

  if (roll === 0) {
    choice = "rock";
  }
  else if (roll === 1) {
    choice = "paper";
  }
  else {
    choice = "scissors";
  }

  return choice;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
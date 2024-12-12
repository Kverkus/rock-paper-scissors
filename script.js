playGame();

function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  let roundResult;

  while (humanScore < 5 && computerScore < 5) {
    roundResult = playRound(getHumanChoice(), getComputerChoice());
    if (roundResult === 1) {
      humanScore += 1;
    }
    else if (roundResult === 2) {
      computerScore += 1;
    }
  }
  
  showResult(humanScore, computerScore);
}

function showResult (humanFinalScore, computerFinalScore) {
  if (humanFinalScore >= 5) {
    console.log(`You win with ${humanFinalScore}-${computerFinalScore} score.`);
  }
  else {
    console.log(`You lose with ${humanFinalScore}-${computerFinalScore} score.`);
  }
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw, you and your opponents chose ${humanChoice}.`);
    return 0;
  }
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
    return 1;
  }
  else {
    console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
    return 2;
  }
}

function getHumanChoice () {
  let choice;
  let isChoiceDone = false;

  while (isChoiceDone !== true) {
    choice = prompt("Choose rock, paper or scissors.", "rock");
    choice = choice.toLowerCase();

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
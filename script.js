for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}

console.log(getHumanChoice());

function getHumanChoice () {
  let choice;
  let isChoiceDone = false;

  while (isChoiceDone !== true) {
    choice = prompt("Choose rock, paper or scissors.", "rock");
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
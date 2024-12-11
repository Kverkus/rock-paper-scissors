for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
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
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(userInput);
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    return console.log('Invalid Entry');
  }
  console.log(userInput);
}

function getComputerChoice () {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  }
    if (computerChoice === 1) {
    return 'paper';
  }
    if (computerChoice === 2) {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice)
  {
    return 'The Game was a Tie'
  } 

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer Won!'
    } else {
      return 'The User Won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer Won!'
    }  else {
    return 'The User Won'
  }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'The user won!'
    }
  }
  if (userChoice === 'bomb') {
    return 'The user won!'
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

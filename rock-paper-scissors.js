const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(userInput);
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    return console.log('Invalid Entry');
  }
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

console.log(getComputerChoice());


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
}
console.log(determineWinner())

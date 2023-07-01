// Game values

let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3

//   Ui elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message')

//   Assign min and Max
minNum.textContent = min
maxNum.textContent = max

// play again event listener

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
    console.log(1)
})

// listen for guess
guessBtn.addEventListener('click', function (e) {
  let guess = parseInt(guessInput.value)

  // validate guess
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max} `, 'red')
  }
  //   check if won
  if (guess === winningNum) {
    // Disable input
    // guessInput.disabled = true
    // // change border color
    // guessInput.style.borderColor = 'green'
    // // set message
    // setMessage(`${winningNum} is correct, YOU WIN `, 'green')
    gameOver(true, `${winningNum} is correct, YOU WIN`)
  } else {
    // wrong number
    guessesLeft -= 1
    if (guessesLeft === 0) {
      // game over lost
      // Disable input
      //   guessInput.disabled = true
      //   // change border color
      //   guessInput.style.borderColor = 'red'

      //   // set message
      //   setMessage(
      //     `game over you lost. The correct number was ${winningNum} `,
      //     'red'
      //   )
      gameOver(
        false,
        `game over you lost. The correct number was ${winningNum} `
      )
    } else {
      // game continues - answer wrong
      guessInput.style.borderColor = 'red'

      //   clear input
      guessInput.value = ''
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left  `,
        'red'
      )
    }
  }
})

function gameOver(won, msg) {
  let color
  won === true ? (color = 'green') : (color = 'red')

  // disable input
  guessInput.disabled = true
  // change border color
  guessInput.style.borderColor = color
  message.style.color = color

  // set message
  setMessage(msg)

  //   play again
  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'
}

// get winningNum
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min +1)+min)

}

function setMessage(msg, color) {
  message.textContent = msg
  message.style.color = color
}

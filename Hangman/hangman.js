/////////////// Challenge 3 ///////////////
// 1) Display the puzzle to the browser instead of the console
// 2) Display the guesses left to the browser instead of console
// 3) Separate the Hangman definition from the rest of the app code (use app.js)
// 4) Setup new "status" value property with initial value of playing
// 5) Create method for recalculating status to "playing", "finised" or "failed"
// 6) Call that method after a guess is processed
// 7) Use console.log to print the status

// Start the game and see "playing"
// Make two incorrect guesses to see "failed"
// Refresh the browser and guess "c", "a" and "t" to see "finished"


const HangmanGame = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
  this.status = 'Playing'
}

HangmanGame.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  });

  return puzzle
}

HangmanGame.prototype.makeGuess = function (char) {
  char = char.toLowerCase()
  const isUnique = this.guessedLetters.every(letter => letter !== char)
  const isBadGuess = !this.word.includes(char)

  if (isUnique && this.status === 'Playing') {
    this.guessedLetters.push(char)
  }

  if (isUnique && isBadGuess && this.status === 'Playing') {
    this.remainingGuesses--
  }

  this.updateStatus()
}

HangmanGame.prototype.updateStatus = function () {
  const puzzle = this.getPuzzle()

  if (this.remainingGuesses === 0) {
    this.status = 'Failed'
  } else {
    if (puzzle.includes('*')) {
      this.status = 'Playing'
    } else {
      this.status = 'Finished'
    }
  }
}
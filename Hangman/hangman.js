/////////////// Challenge 4 ///////////////
// 1) Disable new guesses unless "playing" (Which I've already done in challenge 3)
// 2) Setup a new method to get back a status message

// Playing -> Guesses left: 3
// Failed -> Nice try! The word was "Cat".
// Finished -> Great work! You guessed the word.


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

HangmanGame.prototype.getStatusMessage = function () {
  if (this.status === 'Playing') {
    status.textContent = `Guesses left: ${game1.remainingGuesses}`
  } else if (this.status === 'Failed') {
    status.textContent = `Nice try! The word was "${this.word.join('')}".`
  } else {
    status.textContent = `Great work! You guessed the word.`
  }
}
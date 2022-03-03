/////////////// Challenge 1 ///////////////
// Create a method for making a guess
// 1) Should accept a character for guessing
// 2) Should add unique guesses to list of guesses
// 3) Should decrement the guesses left if a unique guess isn't a match

const HangmanGame = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
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

  if (isUnique) {
    this.guessedLetters.push(char)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }

  return `Remaining guesses: ${this.remainingGuesses}`
}

const game1 = new HangmanGame('Cat', 2)
// Guess c, t, z 
// Test
console.log(game1.makeGuess('c'))
console.log(game1.makeGuess('t'))
console.log(game1.makeGuess('z'))
console.log(game1.getPuzzle()) // c*t
// Print remaining guesses (should be 1)

const game2 = new HangmanGame('New Jersey', 3)
// Guess w 
// Test
console.log(game2.makeGuess('w'))
console.log(game2.getPuzzle()) // **w ******
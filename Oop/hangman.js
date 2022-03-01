/////////////// Challenge 1 ///////////////
// 1) Set up the word instance property as an array of lower case letters
// 2) Set up another instance property to store guessed letters
// 3) Create a method that gives you the word puzzle back

// No guesses? -> ***
// Guessed "c", "b", and "t" -> c*t

const HangmanGame = function (word, remainingGuesses, guessed) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = guessed
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

const game1 = new HangmanGame('Cat', 2, ['s', 'a'])
const game2 = new HangmanGame('New Jersey', 3, ['b', 'e'])

console.log(game1.getPuzzle())
console.log(game2.getPuzzle())
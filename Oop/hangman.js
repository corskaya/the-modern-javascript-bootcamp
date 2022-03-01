const HangmanGame = function (word, remainingGuesses) {
  this.word = word
  this.remainingGuesses = remainingGuesses
}

const game1 = new HangmanGame('Cat', 2)
const game2 = new HangmanGame('New Jersey', 3)

console.log(game1)
console.log(game2)
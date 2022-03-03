const puzzle = document.getElementById('puzzle')
const guessesLeft = document.getElementById('guesses-left')
const status = document.getElementById('status')
const game1 = new HangmanGame('Cat', 2)

puzzle.textContent = `Word : ${game1.getPuzzle()}`
guessesLeft.textContent = `Remaining guesses : ${game1.remainingGuesses}`
status.textContent = `Status : ${game1.status}`

window.addEventListener('keypress', function (e) {
  const char = String.fromCharCode(e.charCode)
  game1.makeGuess(char)
  puzzle.textContent = `Word : ${game1.getPuzzle()}`
  guessesLeft.textContent = `Remaining guesses : ${game1.remainingGuesses}`
  status.textContent = `Status : ${game1.status}`
})
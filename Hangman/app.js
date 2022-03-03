const puzzle = document.getElementById('puzzle')
const status = document.getElementById('status')
const game1 = new HangmanGame('Cat', 2)

puzzle.textContent = `Word : ${game1.puzzle}`
status.textContent = `Guesses left: ${game1.remainingGuesses}`

window.addEventListener('keypress', function (e) {
  if (game1.status === 'Playing') {
    const char = String.fromCharCode(e.charCode)
    game1.makeGuess(char)
    puzzle.textContent = `Word : ${game1.puzzle}`
    game1.statusMessage
  }
})
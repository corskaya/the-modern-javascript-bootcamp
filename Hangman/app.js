// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.getElementById('puzzle')
const statusEl = document.getElementById('status')
const game1 = new HangmanGame('Cat', 2)

puzzleEl.textContent = `Word : ${game1.puzzle}`
statusEl.textContent = `Guesses left: ${game1.remainingGuesses}`

window.addEventListener('keypress', (e) => {
  if (game1.status === 'Playing') {
    const char = String.fromCharCode(e.charCode)
    game1.makeGuess(char)
    puzzleEl.textContent = `Word : ${game1.puzzle}`
    game1.statusMessage
  }
})

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(err)
})

//////////////////// Challenge ////////////////////
// 1) Convert getCountryName to use fetch and return a promise
// 2) Make sure getCountryName still resolves with the country that matches
// 3) Change getCountryName usage to use catch

getCountryName('TR').then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(err)
})
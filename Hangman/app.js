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

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

///////////////////// Challenge //////////////////////
// 1) Create a new function for getting country details
// 2) Call it with two arguments: country code, the callback function
// 3) Make the HTTP request and call the callback with country information
// 4) Use the callback to print the country name

getCountryName('TR', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(country)
  }
})
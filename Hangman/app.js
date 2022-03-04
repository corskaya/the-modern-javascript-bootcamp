// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzle = document.getElementById('puzzle')
const status = document.getElementById('status')
const game1 = new HangmanGame('Cat', 2)

puzzle.textContent = `Word : ${game1.puzzle}`
status.textContent = `Guesses left: ${game1.remainingGuesses}`

window.addEventListener('keypress', (e) => {
  if (game1.status === 'Playing') {
    const char = String.fromCharCode(e.charCode)
    game1.makeGuess(char)
    puzzle.textContent = `Word : ${game1.puzzle}`
    game1.statusMessage
  }
})

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  } else if (e.target.readyState === 4) {
    console.log('En error has taken place')
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
request.send()
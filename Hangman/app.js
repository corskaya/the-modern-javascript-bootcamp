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

////////////////// Challenge //////////////////
// 1) Create getLocation function which takes no argument
// 2) Setup getLocation to make a request to the url and parse the data
// 3) Use getLocation to print the city, region, and country information

// Part 2: Call getCountryName method with promise chaining

getLocation().then((location) => {
  console.log(`You are currently at ${location.city}, ${location.region}, ${location.country}`)
  return getCountryName(location.country)
}).then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(err)
})
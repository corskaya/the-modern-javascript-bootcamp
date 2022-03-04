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
    // console.log(data)
  } else if (e.target.readyState === 4) {
    // console.log('En error has taken place')
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
request.send()

///////////////////// Challenge //////////////////////
// 1) Make a new request for all countries
// 2) Parse the responseText to get back the array of objects
// 3) Find your contry object by it's country code (alpha2Code property)
// 4) Print the full country name (name property)

const request2 = new XMLHttpRequest()

request2.open('GET', 'https://restcountries.com/v3.1/all')
request2.send()

request2.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const countries = JSON.parse(e.target.responseText)
    const myCountry = countries.find(country => country.cca2 === 'TR')
    console.log(myCountry.name.common)
  } else if (e.target.readyState === 4) {
    console.log('Error')
  }
})

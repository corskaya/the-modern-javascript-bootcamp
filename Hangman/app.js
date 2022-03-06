const puzzleEl = document.getElementById('puzzle')
const statusEl = document.getElementById('status')
let game1

window.addEventListener('keypress', (e) => {
  if (game1.status === 'Playing') {
    const char = String.fromCharCode(e.charCode)
    game1.makeGuess(char)
    puzzleEl.textContent = `Word : ${game1.puzzle}`
    game1.statusMessage
  }
})

const render = () => {
  puzzleEl.textContent = `Word : ${game1.puzzle}`
  game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new HangmanGame(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(err)
// })

// getCurrentCountry().then((countryName) => {
//   console.log(countryName)
// }).catch((err) => {
//   console.log(err)
// })
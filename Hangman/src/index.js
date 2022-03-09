import HangmanGame from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.getElementById('puzzle')
export const statusEl = document.getElementById('status')
export let game1

window.addEventListener('keypress', (e) => {
  if (game1.status === 'Playing') {
    const char = String.fromCharCode(e.charCode)
    game1.makeGuess(char)
    render()
    game1.statusMessage
  }
})

const render = () => {
  puzzleEl.innerHTML = ''
  game1.statusMessage

  game1.puzzle.split('').forEach(char => {
    puzzleEl.innerHTML += `<span>${char}</span>`
  })
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new HangmanGame(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
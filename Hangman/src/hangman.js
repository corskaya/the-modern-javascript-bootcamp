import { statusEl } from './index'
import { game1 } from './index'

class HangmanGame {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'Playing'
  }

  get puzzle() {
    let puzzle = ''

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle
  }

  makeGuess(char) {
    char = char.toLowerCase()
    const isUnique = this.guessedLetters.every(letter => letter !== char)
    const isBadGuess = !this.word.includes(char)

    if (isUnique && this.status === 'Playing') {
      this.guessedLetters.push(char)
    }

    if (isUnique && isBadGuess && this.status === 'Playing') {
      this.remainingGuesses--
    }

    this.updateStatus()
  }

  updateStatus() {
    const puzzle = this.puzzle

    if (this.remainingGuesses === 0) {
      this.status = 'Failed'
    } else {
      if (puzzle.includes('*')) {
        this.status = 'Playing'
      } else {
        this.status = 'Finished'
      }
    }
  }

  get statusMessage() {
    if (this.status === 'Playing') {
      statusEl.textContent = `Guesses left: ${game1.remainingGuesses}`
    } else if (this.status === 'Failed') {
      statusEl.textContent = `Nice try! The word was "${this.word.join('')}".`
    } else {
      statusEl.textContent = `Great work! You guessed the word.`
    }
  }
}

export { HangmanGame as default }
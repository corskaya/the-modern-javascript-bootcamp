const getPuzzle = async (count) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

export { getPuzzle as default }
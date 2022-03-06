const getPuzzle = (count) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  }).then((data) => {
    return data.puzzle
  })
}

const getCountryName = (countryCode) => {
  return fetch('https://restcountries.com/v3.1/all').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  }).then((data) => {
    const myCountry = data.find(country => country.cca2 === countryCode)
    return myCountry.name.common
  })
}
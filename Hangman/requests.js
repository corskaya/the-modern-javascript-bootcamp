const getPuzzle = async (count) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
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

const getLocation = () => fetch('http://ipinfo.io/json?token=67a1c53ef912ab').then((response) => {
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch data')
  }
})
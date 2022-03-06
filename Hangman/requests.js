const getPuzzle = async (count) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

const getCountryName = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v3.1/all')

  if (response.status === 200) {
    const data = await response.json()
    const myCountry = data.find(country => country.cca2 === countryCode)
    return myCountry.name.common
  } else {
    throw new Error('Failed to fetch data')
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=67a1c53ef912ab')

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch data')
  }
}

///////////////////// Challenge 2 //////////////////////
// 1) Create a new function called getCurrentCountry
// 2) Should return a promise that resolves the country object for your current location
// 3) Use async/await for the new function

const getCurrentCountry = async () => {
  const location = await getLocation()
  const countryName = await getCountryName(location.country)
  return countryName
}
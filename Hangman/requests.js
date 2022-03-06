const getPuzzle = (count) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)
    } else if (e.target.readyState === 4) {
      reject('An error has taken place')
    }
  })

  // We can call these methods before or after eventlistener, since the operation is async
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${count}`)
  request.send()
})

const getCountryName = (countryCode) => new Promise((resolve, reject) => {
  const request2 = new XMLHttpRequest()

  request2.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const countries = JSON.parse(e.target.responseText)
      const myCountry = countries.find(country => country.cca2 === countryCode)
      resolve(myCountry.name.common)
    } else if (e.target.readyState === 4) {
      reject('An error has taken place')
    }
  })

  request2.open('GET', 'https://restcountries.com/v3.1/all')
  request2.send()
})
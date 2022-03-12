/////////////// Rest Operator /////////////////

const calculateAverage = (thing, ...numbers) => {
  let sum = 0
  numbers.forEach(number => sum += number)
  const average = sum / numbers.length
  return `The average ${thing} is ${average}`
}
console.log(calculateAverage('grade', 0, 100, 66, 84))

// Challenge
// Create printTeam that takes team name, coach, and players

// Output:
// Team: Liberty
// Coach: Casey Penn
// Players: Marge, Aiden, Herbert, Sherry

const printTeam = (name, coach, ...players) => {
  let playersStr = ''
  players.forEach((player, index) => {
    playersStr += index < players.length - 1 ? player + ', ' : player
  })

  return `
  Team: ${name}
  Coach: ${coach}
  Players: ${playersStr}
  `
}

console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry'))


/////////////// Spread Operator /////////////////

const printTeam2 = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(', ')}`)
}

const team = {
  name: 'Libery',
  coach: 'Casey Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam2(team.name, team.coach, ...team.players)

const cities = ['Barcelona', 'Istanbul', 'Cape Town']
let citiesClone = [...cities]
console.log(citiesClone)
citiesClone = ['Madrid', ...citiesClone, 'Ankara']
console.log(citiesClone)

// Works both in arrays and objects

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
}

let newHouse = {
  basement: true,
  ...house
}

console.log(newHouse)

// Challenge

// Create a person object with name and age
// Create a location object with city and country
// Create a new overview object and use the spread operator to add all four properties

const person = {
  name: 'Çağrı',
  age: 23
}

const location = {
  city: 'Istanbul',
  country: 'Turkey'
}

const overview = {
  ...person,
  ...location
}

console.log(overview)
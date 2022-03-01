const square = (num) => num * num

const squareLong = (num) => {
  return num * num
}

console.log(square(5))

const people = [{
  name: 'Cagri',
  age: 23
},
{
  name: 'Hakan',
  age: 35
},
{
  name: 'Hande',
  age: 31
}]

const under30 = people.filter(person => person.age < 30)
console.log(under30)

// Find the person with age 35
// Print that persons name

const person = people.findIndex(person => person.age === 35)
console.log(people[person].name)
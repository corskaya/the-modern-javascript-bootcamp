// Lesson

// Undefined for variable
let name

name = 'Çağrı'

if (name === undefined) {
  console.log('Plase provide a name')
} else {
  console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value
let square = function (num) { // here num is undefined
  console.log(num)
}

let result = square() // here result is undefined
console.log(result)

// Null as assigned value
let age = 23

age = null // here age is null

console.log(age)
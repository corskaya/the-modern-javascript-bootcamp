// Lesson

// var is function scoped variable (this means outside of functions, var is accessable everywhere)
// let and const are block scoped variables

// Case 1:
if (true) {
  var id = 123
}

console.log(id) // prints 123,  we do not want this

// Case 2:
var firstName = 'Çağrı'
firstName = 'Hakan'
var firstName = 'Hande' // we do not want this

console.log(firstName)

// Case 3: (Hoisting)
console.log(age) // prints undefined, instead of throwing error
var age
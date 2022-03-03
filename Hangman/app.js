// Primitive types: string, number, boolean, null, undefined

///////////////// Prototype Chain ////////////////

// Object : myObject --> Object.prototype --> null
// Array : myArray --> Array.prototype --> Object.prototype --> null
// Function : myFunc --> Function.prototype --> Object.prototype --> null
// String : myString --> String.prototype --> Object.prototype --> null
// Number : myNumber --> Number.prototype --> Object.prototype --> null
// Boolean : myBoolean --> Boolean.prototype --> Object.prototype --> null

//////////////////////////////////////////////////

// Declaring Objects
// 1st way
// const person = {
//   name: 'Mike'
// }
// 2nd way
// const person = new Object()
// person.name = 'Mike'
// 3rd way
// const person = new Object({
//   name: 'Mike'
// })

// Declaring Arrays
// 1st way
// const team = ['Luke', 'Madison']
// 2nd way
// const team = new Array(['Luke', 'Madison'])
// console.log(team.constructor === Array) // prints true

// Declaring Strings
// 1st way
// const product = 'Computer' // type of string
// 2nd way
// const product = new String('Computer') // type of object
// console.log(product.constructor === String) // prints true
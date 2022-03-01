const products = []
const product = products[0]

// We don't have to put true or false inside condition - It may truthy or falsy too

if (product) {
  console.log('Product found')
} else {
  console.log('Product not found')
}

// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN
// Anything that not falsy is truthy

// if (undefined) { // prints Product not found
//   console.log('Product found')
// } else {
//   console.log('Product not found')
// }

// if ('non empty string') { // prints Product found
//   console.log('Product found')
// } else {
//   console.log('Product not found')
// }


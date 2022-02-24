// Lesson

let num = 103.141

console.log(num.toFixed(2)) // converts to string type

console.log(Math.round(num))
console.log(Math.floor(num)) // rounds down
console.log(Math.ceil(num)) // rounds up


// Generating a random number in a specific range
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)


// Challenge

// Guess game
// 1-5 - true if correct - false if not correct

let compareNums = function (guess) {
  let random = Math.floor(Math.random() * 5) + 1
  return guess === random
}

console.log(compareNums(1))


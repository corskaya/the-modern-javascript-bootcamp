// Lesson

// Function - input (argument), code, output (return value)

let greetUser = function() {
    console.log('Welcome user!')
}

// greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let value2 = square (10)

console.log(value, value2)


// Challenge

// converFahrenheitToCelsius
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)
    return celsius
}

// Call a couple of times (32 -> 0) (68 -> 20)
// Print the converted values
console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))

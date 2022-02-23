// Lesson

//Multiple Arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments 
let getScoreText = function(name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


//Challenge

// total, tipPercent 

let getTip = function(total, tipPercent = 0.15) {
    return total * tipPercent
}

let tip = getTip(120, 0.2)
console.log(tip)
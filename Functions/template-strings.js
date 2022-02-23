// Lesson

let name = 'Çağrı'
let age = 23
console.log(`Hey, my name is ${name} and I am ${age} years old.`)


// Challenge

// A 25% tip on $40 would be $10
let getTip = function(total, tipPercent = 0.15) {
    let tip = total * tipPercent
    return `A ${tipPercent * 100}% tip on $${total} would be $${tip}`
}

let tipMessage = getTip(120, 0.2)
console.log(tipMessage)
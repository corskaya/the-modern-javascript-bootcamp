// Lesson

let temp = 75

// Logical And Operator - Both sides must be true

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
}

// Logical Or Operator - At least one side must be true

if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
}


// Challenge

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes
// At least one vegan? Make sure to offer up some vegan options
// Else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan foods')
} else if (!isGuestOneVegan && !isGuestTwoVegan) {
    console.log('Anything on the menu')
} else {
    console.log('Offering up some vegan options')
}
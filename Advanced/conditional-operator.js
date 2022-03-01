const myAge = 23
let message

// if (myAge >= 10) {
//   message = 'You can vote!'
// } else {
//   message = 'You cannot vode.'
// }

message = myAge > 18 ? 'You can vote!' : 'You cannot vote.'

console.log(message)


// Another example

const showPage = () => {
  console.log('Showing the page')
}

const showErrorPage = () => {
  console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()


// Challenge

const team = ['Tyler', 'Porter']
// 1) Print "Team size: 3" if less than or equal to 4
// 2) Print "Too many people on your team" otherwise

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')
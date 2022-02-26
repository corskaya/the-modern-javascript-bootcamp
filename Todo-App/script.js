const todos = [{
  text: 'Order cat food',
  completed: true
}, {
  text: 'Clean kitchen',
  completed: false
}, {
  text: 'Buy food',
  completed: true
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}]

// Challenge
// You have 2 todos to left (p element)
// Add a p for each todo above (use text value)

const leftToDo = todos.filter(todo => !todo.completed)
const body = document.querySelector('body')
let thing

let explanation = document.createElement('h3')
explanation.textContent = `You have ${leftToDo.length} todos left`
document.querySelector('body').appendChild(explanation)

leftToDo.forEach(todo => {
  thing = document.createElement('p')
  thing.textContent = `- ${todo.text}`
  body.appendChild(thing)
})

// Another challenge
// Add a button and make new todo occurs when you click

const button = document.querySelector('button')

button.addEventListener('click', function () {
  thing = document.createElement('p')
  thing.textContent = '- New todo'
  body.appendChild(thing)
})
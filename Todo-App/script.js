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

let explanation = document.createElement('h3')
explanation.textContent = `You have ${leftToDo.length} todos left`
document.querySelector('body').appendChild(explanation)

let thing
leftToDo.forEach(todo => {
  thing = document.createElement('p')
  thing.textContent = `- ${todo.text}`
  document.querySelector('body').appendChild(thing)
})
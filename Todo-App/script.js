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

const body = document.querySelector('body')
const input = document.querySelector('#add-todo')
const button = document.querySelector('button')
const filterInput = document.querySelector('#filter-todo')
let leftToDo
let inputValue
let filterValue = filterInput.innerHTML

///////////////////////// Challenge ////////////////////////
// Add todos from input
// Filter todos

const renderTodos = function () {
  document.querySelector('#todos-area').innerHTML = ''

  leftToDo = todos.filter(todo => !todo.completed)
  leftToDo.forEach(todo => {
    if (todo.text.toLowerCase().includes(filterValue.toLowerCase())) {
      let newItem = document.createElement('p')
      newItem.textContent = todo.text
      document.querySelector('#todos-area').appendChild(newItem)
    }
  })

  let explanation = document.createElement('h3')
  explanation.textContent = `You have ${leftToDo.length} todos left`
  document.querySelector('#explanation').innerHTML = ''
  document.querySelector('#explanation').appendChild(explanation)
}

renderTodos()

filterInput.addEventListener('input', function (e) {
  filterValue = e.target.value
  renderTodos()
})

input.addEventListener('change', e => inputValue = e.target.value)

button.addEventListener('click', function () {
  if (inputValue !== undefined) {
    todos.push({ text: inputValue, completed: false })
  }
  renderTodos()
  console.log(input)
})
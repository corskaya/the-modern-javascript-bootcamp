let todos = []

const body = document.querySelector('body')
const input = document.querySelector('#todo-form').elements.input
const button = document.querySelector('#todo-form').elements.button
const filterInput = document.querySelector('#filter-todo')
const hideCompleted = document.querySelector('#hide-completed')
let leftToDo
let inputValue
let filterValue = filterInput.innerHTML
let hideCheck = false

///////////////////////// Challenge ////////////////////////
// 1) Delete dummy data
// 2) Read and parse the data when the app starts up
// 3) Stringify and write the data when new data is added

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON)
}

const renderTodos = function () {
  document.querySelector('#todos-area').innerHTML = ''
  leftToDo = todos.filter(todo => !todo.completed)

  let showingTodos = hideCheck ? leftToDo : todos

  showingTodos.forEach(todo => {
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
    let todoContent = { text: inputValue, completed: false }
    todos.push(todoContent)
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  renderTodos()
  input.value = ''
  inputValue = undefined
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
  e.preventDefault()
})

hideCompleted.addEventListener('change', function (e) {
  hideCheck = e.target.checked
  renderTodos()
})
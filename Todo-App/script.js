const body = document.querySelector('body')
const input = document.querySelector('#todo-form').elements.input
const button = document.querySelector('#todo-form').elements.button
const filterInput = document.querySelector('#filter-todo')
const hideCompleted = document.querySelector('#hide-completed')
let leftToDo
let inputValue
let filterValue = filterInput.innerHTML
let hideCheck = false

const todos = getSavedTodos()

renderTodos()

filterInput.addEventListener('input', function (e) {
  filterValue = e.target.value
  renderTodos()
})

input.addEventListener('change', function (e) {
  inputValue = e.target.value
})

button.addEventListener('click', function () {
  if (inputValue !== undefined) {
    let todoContent = { text: inputValue, completed: false }
    todos.push(todoContent)
    saveTodos(todos)
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
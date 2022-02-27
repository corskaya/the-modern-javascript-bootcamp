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
const input = document.querySelector('#todo-form').elements.input
const button = document.querySelector('#todo-form').elements.button
const filterInput = document.querySelector('#filter-todo')
const hideCompleted = document.querySelector('#hide-completed')
let leftToDo
let inputValue
let filterValue = filterInput.innerHTML
let hideCheck = false

///////////////////////// Challenge ////////////////////////
// 1) Create a checkbox and setup event listener -> "Hide completed"
// 2) Create new hideCompleted filter (default false)
// 3) Update hideCompleted and rerender list on checkbox challenge
// 4) Setup renderTodos to remove completed items

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
    todos.push({ text: inputValue, completed: false })
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
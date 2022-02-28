///////////////////////// Challenge ////////////////////////
// Refactor script.js file

// Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function () {
  document.querySelector('#todos-area').innerHTML = ''
  leftToDo = todos.filter(todo => !todo.completed)

  generateTodoDOM()
  getSummary()
}

// Get the DOM elements for an individual note
const generateTodoDOM = function () {
  let showingTodos = hideCheck ? leftToDo : todos

  showingTodos.forEach(todo => {
    if (todo.text.toLowerCase().includes(filterValue.toLowerCase())) {
      let newItem = document.createElement('p')
      newItem.textContent = todo.text
      document.querySelector('#todos-area').appendChild(newItem)
    }
  })
}

// Get the DOM elements for list summary
const getSummary = function () {
  let explanation = document.createElement('h3')
  explanation.textContent = `You have ${leftToDo.length} todos left`
  document.querySelector('#explanation').innerHTML = ''
  document.querySelector('#explanation').appendChild(explanation)
}
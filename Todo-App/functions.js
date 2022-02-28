///////////////////////// Challenge ////////////////////////
// 1) Wire up button event
// 2) Remove todo by id
// 3) Save and rerender the todos list

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

// Remove todos
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(todo => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
  saveTodos(todos)
  renderTodos()
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
    let todoArea = document.createElement('div')
    let checkbox = document.createElement('input')
    let todoText = document.createElement('span')
    let removeButton = document.createElement('button')

    if (todo.text.toLowerCase().includes(filterValue.toLowerCase())) {
      document.querySelector('#todos-area').appendChild(todoArea)

      // Setup todo checkbox
      checkbox.setAttribute('type', 'checkbox')
      todoArea.appendChild(checkbox)

      // Setup todo text
      todoText.textContent = todo.text
      todoArea.appendChild(todoText)

      // Setup the remove button
      removeButton.textContent = 'x'
      todoArea.appendChild(removeButton)
      removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
      })
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
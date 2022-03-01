///////////////////////// Challenge ////////////////////////
// 1) Add Completed feature with checkboxes

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  return todosJSON !== null ? JSON.parse(todosJSON) : []
}

// Save todos to localStorage
const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todos
const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
  saveTodos(todos)
  renderTodos()
}

// Render application todos based on filters
const renderTodos = () => {
  document.querySelector('#todos-area').innerHTML = ''

  generateTodoDOM()
  getSummary()
}

// Get the DOM elements for an individual note
const generateTodoDOM = () => {
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

      if (todo.completed) checkbox.setAttribute('checked', '')

      todoArea.appendChild(checkbox)
      checkbox.addEventListener('change', e => {
        todo.completed = e.target.checked
        saveTodos(todos)
        getSummary()
        if (hideCheck) {
          renderTodos()
        }
      })

      // Setup todo text
      todoText.textContent = todo.text
      todoArea.appendChild(todoText)

      // Setup the remove button
      removeButton.textContent = 'x'
      todoArea.appendChild(removeButton)
      removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
      })
    }
  })
}

// Get the DOM elements for list summary
const getSummary = () => {
  leftToDo = todos.filter(todo => !todo.completed)
  let explanation = document.createElement('h3')
  explanation.textContent = `You have ${leftToDo.length} todos left`
  document.querySelector('#explanation').innerHTML = ''
  document.querySelector('#explanation').appendChild(explanation)
}
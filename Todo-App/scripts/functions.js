'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
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
    let todoArea = document.createElement('label')
    let container = document.createElement('div')
    let checkbox = document.createElement('input')
    let todoText = document.createElement('span')
    let removeButton = document.createElement('button')

    if (todo.text.toLowerCase().includes(filterValue.toLowerCase())) {
      document.querySelector('#todos-area').appendChild(todoArea)

      // Setup todo checkbox
      checkbox.setAttribute('type', 'checkbox')

      if (todo.completed) checkbox.setAttribute('checked', '')

      container.appendChild(checkbox)
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
      container.appendChild(todoText)

      // Setup container
      todoArea.classList.add('list-item')
      container.classList.add('list-item__container')
      todoArea.appendChild(container)

      // Setup the remove button
      removeButton.textContent = 'x'
      removeButton.classList.add('button', 'button--text')
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
  explanation.classList.add('list-title')
  const plural = leftToDo.length === 1 ? '' : 's'
  if (leftToDo.length > 0) {
    explanation.textContent = `You have ${leftToDo.length} todo${plural} left`
  } else {
    explanation.textContent = `All todos are done`
  }
  document.querySelector('#explanation').innerHTML = ''
  document.querySelector('#explanation').appendChild(explanation)
}
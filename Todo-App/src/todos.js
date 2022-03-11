/////////////////// Challenge /////////////////

import uuidv4 from 'uuid/v4'

let todos = []

// loadTodos
// args: none
// return: none
const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    todos = todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    todos = []
  }
}

// getTodos
// args: none
// return: todos array
const getTodos = () => todos

// saveTodos
// args: none
// return: none
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// createTodo
// args: todo text
// return: none
const createTodo = text => {
  todos.push({
    id: uuidv4(),
    text: text,
    completed: false,
  })

  saveTodos()
}

// removeTodo
// args: id of todo to remove
// return: none
const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }

  saveTodos()
}

// toggleTodo
// args: id of todo to toggle
// return: none
const toggleTodo = id => {
  const todo = todos.find(todo => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
  }
}

loadTodos()

// Make sure to call loadTodos and set up the exports
export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }
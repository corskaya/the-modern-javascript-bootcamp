// const todos = ['one', 'two', 'three', 'four', 'five']

////////////// Challenge 1 ///////////////

// // Create an array with five todos
// // Print -> You have x todos
// // Print the first and second to last items -> Todo: walk the dog

// console.log(`You have ${todos.length} todos`)
// console.log(todos[0])
// console.log(todos[todos.length - 2])

////////////// Challenge 2 ///////////////

// // Delete the 3rd item
// // Add a new item onto the and
// // Remove the first item

// todos.splice(2, 1)
// todos.push('new item')
// todos.shift()

// console.log(todos)

////////////// Challenge 3 ///////////////

// // Loop through todos array and print each item

// todos.forEach(function (item) {
//   console.log(item)
// })

////////////// Challenge 4 ///////////////

// // Loop through todos array with for loop and print each item

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i])
// }

////////////// Challenge 5 ///////////////

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

// const todoObjects = []

// todos.forEach(function (item) {
//   todoObjects.push({ text: item, completed: false })
// })

// const deleteTodo = function (array, searchingItem) {
//   const index = array.findIndex(function (item) {
//     return item.text.toLowerCase() === searchingItem.toLowerCase()
//   })
//   if (index !== -1) {
//     array.splice(index, 1)
//   }
// }

// deleteTodo(todoObjects, 'one')
// console.log(todoObjects)

////////////// Challenge 6 ///////////////

// Print not completed todos array

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

// const getThingsToDo = function (array) {
//   return array.filter(function (item) {
//     return !item.completed
//   })
// }

// console.log(getThingsToDo(todos))

////////////// Challenge 7 ///////////////

// Sort todos array based on completed status

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed < b.completed) {
      return -1
    } else if (a.completed > b.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)
console.log(todos)
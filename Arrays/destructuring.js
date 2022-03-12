// const todo = {
//   id: 'asjdfklasj',
//   text: 'Pay the bills',
//   completed: false
// }

// // Without destructuring
// // const text = todo.text
// // const completed = todo.completed

// // With destructuring
// const { text: todoText, completed, details, ...others } = todo
// console.log(todoText) // "Pay the bills"
// console.log(completed) // false
// console.log(details) // undefined
// console.log(others) // {id: 'asjdfklasj'}

// const age = [65, 0, 13, 21, 35, 36, 55]
// const [firstAge, secondAge, , fourthAge, ...otherAges] = age
// console.log(firstAge) // 65
// console.log(secondAge) // 0
// console.log(fourthAge) // 21
// console.log(otherAges) // [35, 36, 55]

// const printTodo = ({ todoText, todoStatus }) => {
//   console.log(`${todoText}: ${todoStatus}`)
// }
// printTodo(todo)
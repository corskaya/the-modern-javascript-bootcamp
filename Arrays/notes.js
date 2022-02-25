// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.pop() // removes the last item and returns it
// notes.shift() // removes the first item and returns it
// notes.push('Note 4') // adds new item to end of an array
// notes.unshift('Note 0') // adds new item to beginning of an array

// console.log(notes)
// console.log(notes[notes.length - 1])

// // Here notes = ['Note 0', 'Note 2', 'Note 4'] 

// notes.splice(1, 0, 'Note 1 is back!')

// console.log(notes)

// notes.forEach(function (item) {
//   console.log(item)
// })

// console.log(notes.indexOf('Note 2')) // returns index if item exists; if not, returns -1

////////////////////////////////////////////

const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise, Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

const sortNotes = function (notes) {
  return notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

console.log(sortNotes(notes))

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
// }

// const findNotes = function (notes, query) {
//   return notes.filter(function (note) {
//     const isTitleMatch = note.title.toLowerCase().includes(query)
//     const isBodyMatch = note.body.toLowerCase().includes(query)
//     return isTitleMatch || isBodyMatch
//   })
// }

// console.log(findNotes(notes, 'work'))

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

// const note = findNote(notes, 'Office modification')
// console.log(note)

// console.log(notes.findIndex(function (note) {
//   return note.title === 'Habbits to work on'
// }))


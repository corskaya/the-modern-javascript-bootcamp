let notes = []

const filters = {
  searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes') // equals to null if there is no data has the key of notes

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}

////////////////// Local Storage //////////////////

// Methods
// localStorage.setItem('location', 'Istanbul') // parameters are key and value
// localStorage.getItem('location') // parameter is key
// localStorage.removeItem('location') // parameter is key
// localStorage.clear() // removes every data

// JSON.stringify() -> We use this when we write data to local storage
// const user = {
//   name: 'Cagri',
//   age: 23
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// JSON.page() -> We use this when we read data from local storage
// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(user.age)

////////////////////////////////////////////////////


const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(note => {
    const noteEl = document.createElement('p')

    if (note.title.length > 0) {
      noteEl.textContent = note.title
    } else {
      noteEl.textContent = 'Unnamed note'
    }

    document.querySelector('#notes').appendChild(noteEl)
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
  notes.push({
    title: '',
    body: ''
  })
  localStorage.setItem('notes', JSON.stringify(notes))
  renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
})
let notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function () {
  const id = uuidv4()
  notes.push({
    id: id,
    title: '',
    body: ''
  })
  saveNotes(notes)
  location.assign(`./edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
})

////////////////////// Challenge //////////////////////
// 1) Parse the new data and update notes
// 2) Rerender notes

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
  }

  renderNotes(notes, filters)
})
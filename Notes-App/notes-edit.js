const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(note => note.id === noteId)
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const remove = document.querySelector('#remove-note')
const editInfo = document.querySelector('#edit-info')

if (note === undefined) {
  location.assign('./index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
editInfo.textContent = generateLastEdited(note.updatedAt)

/////////////////////// Challenge ///////////////////////
// 1) Add a DOM element between the title and body inputs (empty span)
// 2) Set text value: Last edited 4 hours ago
// 3) Update value on title/body/storage change

noteTitle.addEventListener('input', e => {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  editInfo.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

noteBody.addEventListener('input', e => {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  editInfo.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

remove.addEventListener('click', () => {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('./index.html')
})

window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find(note => note.id === noteId)

    if (note === undefined) {
      location.assign('./index.html')
    }

    noteTitle.value = note.title
    noteBody.value = note.body
    editInfo.textContent = generateLastEdited(note.updatedAt)
  }
})
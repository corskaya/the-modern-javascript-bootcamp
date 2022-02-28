const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(note => note.id === noteId)
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const remove = document.querySelector('#remove-note')

if (note === undefined) {
  location.assign('./index.html')
}

noteTitle.value = note.title
noteBody.value = note.body

/////////////////////// Challenge ///////////////////////
// 1) Setup input event for title
// 2) Update note object and save notes list
// 3) Repeat steps 1-2 for body
// 4) Setup a remove button that removes notes and sends user back to home page

noteTitle.addEventListener('input', function (e) {
  note.title = e.target.value
  saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
  note.body = e.target.value
  saveNotes(notes)
})

remove.addEventListener('click', function () {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('./index.html')
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find(note => note.id === noteId)

    if (note === undefined) {
      location.assign('./index.html')
    }

    noteTitle.value = note.title
    noteBody.value = note.body
  }
})
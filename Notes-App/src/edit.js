import { initializeEditPage, generateLastEdited } from "./views"
import { updateNote, removeNote } from './notes'

const noteId = location.hash.substring(1)
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const remove = document.querySelector('#remove-note')
const editInfo = document.querySelector('#edit-info')

initializeEditPage(noteId)

noteTitle.addEventListener('input', e => {
  const note = updateNote(noteId, {
    title: e.target.value
  })
  editInfo.textContent = generateLastEdited(note.updatedAt)
})

noteBody.addEventListener('input', e => {
  const note = updateNote(noteId, {
    body: e.target.value
  })
  editInfo.textContent = generateLastEdited(note.updatedAt)
})

remove.addEventListener('click', () => {
  removeNote(noteId)
  location.assign('./index.html')
})

window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    initializeEditPage(noteId)
  }
})
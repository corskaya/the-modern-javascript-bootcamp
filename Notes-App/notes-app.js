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

document.querySelector('button').addEventListener('click', function (e) {
  e.target.textContent = 'The button was clicked'
  // target property is a representation of that element
  // e event argument is useful when we want to do something with the element we reached
})
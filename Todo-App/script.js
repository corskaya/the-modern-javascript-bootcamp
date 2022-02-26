// 1) Create a new HTML file
// 2) An h1 and 5 p tags
// 3) Server that folder and view the doc in the browser

const h1 = document.querySelector('h1')
const ps = document.querySelectorAll('p')

ps.forEach(p => {
  if (p.textContent.includes('the')) {
    p.remove()
  }
})

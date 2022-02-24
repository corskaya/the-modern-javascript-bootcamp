// Lesson

// Global (name)
// Local (name)
// Local
// Local

let name = 'Çağrı'

if (true) {
  let name = 'Hakan'

  if (true) {
    name = 'Hande'
    console.log(name) // will print Hande
  }
}

if (true) {
  console.log(name) // will print Çağrı
}
// Counter
const createCounter = () => {
  let count = 0
  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}
// Now initial value of count is private to outside
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(6))
console.log(add10(-7))
const add100 = createAdder(100)
console.log(add100(200))


////////////////// Tipper Challenge ///////////////////
// 1) Create createTipper which takes in the base tip (.15 for 15% tip)
// 2) Set it up to return a function that takes in the bill amount
// 3) Call createTipper to generate a few functions for different percentages
// 4) Use the generated function to calculate tips and print them

const createTipper = (baseTip = .15) => {
  return (amount) => {
    return amount * baseTip
  }
}

const tipDefault = createTipper()
console.log(tipDefault(50))
console.log(tipDefault(100))
const tip20 = createTipper(.25)
console.log(tip20(100))
console.log(tip20(200))
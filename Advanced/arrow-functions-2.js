const add = function (a, b) {
  console.log(arguments)
}

add(11, 22, 33, 44) // prints {'0': 11, '1': 22, '2': 33, '3': 44,}

// arguments only exist for regular functions

const car = {
  color: 'Red',
  getSummary: function () {
    return `The car is ${this.color}`
  }
}

console.log(car.getSummary())

// this keyword only bind for regular functions
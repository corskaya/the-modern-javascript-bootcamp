// Prototypal Inheritence

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
  }

  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, likes, position) {
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}

///////////////// Challenge //////////////////
// 1) Create Class for students
// 2) Track student grade. 0 - 100
// 3) Override bio to print a passing or failing message.
// 70 and above "Andrew is passing the class", below "Andrew is failing the class"
// 4) Create "updateGrade" that takes the amount to add or remove from the grade

// Create student
// Print status (failing or passing)
// Change grade to change status
// Print status again

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    if (this.grade >= 70) {
      return `${this.firstName} ${this.lastName} is passing the class.`
    } else {
      return `${this.firstName} ${this.lastName} is failing the class.`

    }
  }

  updateGrade(change) {
    this.grade += change
  }
}

// Tests
const me = new Student('Çağrı', 'Örskaya', 23, ['guitars'], 55)
console.log(me.getBio())
me.updateGrade(20)
console.log(me.getBio())

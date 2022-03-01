// Challenge

// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let getGrade = function (studentScore, totalScore) {
  if ((typeof studentScore) !== 'number' || (typeof totalScore) !== 'number') {
    throw Error('Arguments must be numbers')
  }

  let percent = (studentScore / totalScore) * 100
  if (percent >= 0 && percent <= 100) {
    let letterGrade
    if (percent >= 90) letterGrade = 'A'
    else if (percent >= 80) letterGrade = 'B'
    else if (percent >= 70) letterGrade = 'C'
    else if (percent >= 60) letterGrade = 'D'
    else letterGrade = 'F'
    return `You got a ${letterGrade} (${percent}%)!`
  }
}

try {
  let studentScore = 16
  let totalScore = 20
  let grade = getGrade(studentScore, totalScore)

  console.log(grade)
} catch (e) {
  console.log(e.message)
}
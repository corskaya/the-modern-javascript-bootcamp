// Lesson

let myAccount = {
  name: 'Çağrı Örskaya',
  expenses: 0,
  income: 0
}


// Challenge
// addIncome

// resetAccount

// getAccountSummary
// Account for Andrew has 900, $1000 in income, $100 in expenses.

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
  account.income = account.income + amount
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account) {
  return `Account for ${account.name} has ${account.income - account.expenses}, ${account.income}$ in income, ${account.expenses}$ in expenses.`
}

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

addIncome(myAccount, 500)
console.log(myAccount)

addExpense(myAccount, 200)
console.log(myAccount)

addExpense(myAccount, 400)
console.log(myAccount)

console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(myAccount)

console.log(getAccountSummary(myAccount))
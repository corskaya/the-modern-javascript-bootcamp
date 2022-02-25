const account = {
  name: 'Çağrı Örskaya',
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    this.expenses.push({ description: description, amount: amount })
    this.totalExpenses += amount
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description: description, amount: amount })
    this.totalIncome += amount
  },
  getAccountSummary: function () {
    return `${this.name} has a balance of $${this.totalIncome - this.totalExpenses}. $${this.totalIncome} in income. $${this.totalExpenses} in expenses.`
  },
  totalExpenses: 0,
  totalIncome: 0
}

// Challenge Part 1 
// Expense -> description(string), amount(number)
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Çağrı Örskaya has $1250 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

// Challenge Part 2
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Çağrı Örskaya has a balance of $10. $100 in income. $90 in expenses.
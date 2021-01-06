let myAccount = {
    myName: 'Mario',
    income: 0,
    expenses: 0,
    money: 0
}


let addIncome = function (fixed, variable) {
    fixed.income = fixed.income + variable
}

let addExpense = function (fixed, variable) {
    fixed.expenses = fixed.expenses + variable
}

let resetAccount = function (fixed) {
    fixed.income = 0
    fixed.expenses = 0
}

let summary = function (fixed) {
    fixed.money = fixed.income - fixed.expenses
    return `Amount for ${fixed.myName} has ${fixed.money}. ${fixed.income} in income. ${fixed.expenses} in expenses`
}


   
addIncome(myAccount,2000)
addExpense(myAccount,100)
console.log(summary(myAccount))



//Amount for Mario has $900. $1000 in income. $100 expenses
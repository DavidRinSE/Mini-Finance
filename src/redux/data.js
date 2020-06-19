let transactions = [
    {
        name: 'Red Bull',
        category: 'Snacks',
        amount: '3.00',
        date: '2020-04-03',
        type: 'expense'
      },
      {
        name: 'Kenzie Academy',
        amount: '230.00',
        date: '2020-04-03',
        type: 'income'
      }
]
let balance =  "221.00"
let income = "230.00"
let expense = "3.00"

let history = [
    {
        balance: '157.75',
        income: '210.50',
        expense: '52.75',
        startDate: '2020-03-27',
        endDate: '2020-03-31',
        categories: {
          Hobbies: '50.00',
          Snacks: '2.75'
        }
      },
      {
        balance: '216.00',
        income: '240.00',
        expense: '24.00',
        startDate: '2020-03-20',
        endDate: '2020-03-26',
        categories: {
          Snacks: '3.00',
          Gas: '21.00'
        }
      },
      {
        balance: '157.00',
        income: '200.00',
        expense: '43.00',
        startDate: '2020-03-13',
        endDate: '2020-03-18',
        categories: {
          Food: '10.0010.00',
          Gas: '23.00'
        }
      },
      {
        balance: '168.50',
        income: '230.00',
        expense: '61.50',
        startDate: '2020-03-06',
        endDate: '2020-03-12',
        categories: {
          Hobbies: '20.00',
          Food: '11.007.50',
          Gas: '23.00'
        }
      }
]

export const logIn = (username, password) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {resolve({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhdmlkMiIsImlhdCI6MTU5MjU4NDI4NCwiZXhwIjoxNTkyNjcwNjg0fQ.ZIj2CYrg5JZJeHfhfiaSPH2VdD8aVGI-MnEA1vOYNqU",
        error: ""
      })}, 500)
  })
}
export const getFinance = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve({transactions, balance, income, expense})}, 500)
    })
}
export const getHistory = () => {
    return new Promise((resolve, reject) => {
        const currentHistory = (transactions.length > 1) ? makeHistory({transactions, balance, income, expense}): {}
        setTimeout(() => {resolve({current: currentHistory, history})}, 500)
    })
}
export const newPeriod = () => {
    const lastPeriod = makeHistory({transactions, balance, income, expense})
    history = [lastPeriod, ...history]
    transactions = []
    balance = "0.00"
    income = "0.00"
    expense = "0.00"
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve({finance: {transactions, balance, income, expense}, history})}, 500)
    })
}
export const postExpense = (new_data) => {
    balance = String((parseFloat(balance) - new_data.amount).toFixed(2))
    expense = String((parseFloat(expense) + new_data.amount).toFixed(2))
    transactions = [{...new_data, amount: String(new_data.amount.toFixed(2)), type:"expense"}, ...transactions]
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("success")}, 20000)
    })
}
export const postIncome = (new_data) => {
    balance = String((parseFloat(balance) + new_data.amount).toFixed(2))
    income = String((parseFloat(income) + new_data.amount).toFixed(2))
    transactions = [{...new_data, amount: String(new_data.amount.toFixed(2)), type:"income"}, ...transactions]
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("success")}, 500)
    })
}

const makeHistory = (data) => {
    let categories = {}
    data.transactions.forEach(transaction => {
        if(transaction.type === 'expense') {
            if (categories[transaction.category]){
                categories[transaction.category] += transaction.amount
            }else {
                categories[transaction.category] = transaction.amount
            }
        }
    });
    return {
        balance: data.balance, 
        income: data.income,
        expense: data.expense,
        startDate: data.transactions[data.transactions.length -1].date,
        endDate: data.transactions[0].date,
        categories
    }
}
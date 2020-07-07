import React from "react"
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from "recharts"

const ExpensesByCategory = (props) => {
    const {expenses} = props

    const getRandomColor = () => { // From github gist: https://gist.github.com/mucar/3898821
        const letters = '3456789ABC'; // Adjusted to only use lighter colors
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 9)];
        }
        return color;
    }

    const getData = () => {
        let result = {}

       expenses.forEach(expenseObj => {
            const amount = parseFloat(expenseObj.amount / 100)
            if(result[expenseObj.category]){
                result[expenseObj.category].push(amount)
            } else {
                result[expenseObj.category] = [amount]
            }
        })

        let resultArr = []
        Object.keys(result).forEach(category => {
            const sum = result[category].reduce((prev, curr) => curr += prev)
            resultArr.push({name: category, amount: sum})
        })
        return resultArr
    }
    const data = getData()
    return (
        <div>
            <p>Total Expenses by Category</p>
            <ResponsiveContainer width="99%" aspect={1}>
                <PieChart>
                    <Legend />
                    <Pie 
                        data={data}
                        dataKey="amount"
                        nameKey="name"
                        outerRadius={"65%"}
                        fill="#8884d8"
                        label={(data) => "$" + parseFloat(data.amount).toFixed(2)}
                        >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={getRandomColor()} />)
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
export default ExpensesByCategory
import React from "react"
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from "recharts"

const ExpensesByCategory = (props) => {
    const {history} = props

    const getRandomColor = () => { // From github gist: https://gist.github.com/mucar/3898821
        const letters = '3456789ABCDEF'; // Adjusted to only use lighter colors
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 12)];
        }
        return color;
    }

    const getData = () => {
        let result = {}

        history.slice(0, 5).forEach(historyObj => {
            historyObj.categories.forEach(category => {
                const amount = parseFloat(category.amount / 100)
                if(result[category.name]){
                    result[category.name].push(amount)
                } else {
                    result[category.name] = [amount]
                }
            })
        })

        let resultArr = []
        Object.keys(result).forEach(category => {
            const sum = result[category].reduce((prev, curr) => curr += prev)
            const avg = sum / result[category].length
            resultArr.push({name: category, amount: avg})
        })
        return resultArr
    }
    const data = getData()
    return (
        <div>
            <p>Average Expenses by Category</p>
            <ResponsiveContainer width="100%" aspect={1}>
                <PieChart>
                    <Legend />
                    <Pie 
                        data={data}
                        dataKey="amount"
                        nameKey="name"
                        outerRadius={"70%"}
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
import React from "react"
import {ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend} from "recharts"

const IncomeAndExpense = (props) => {
    const {history} = props

    let name = (startDate, endDate) => {
        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
        startDate = startDate.split("-")
        endDate = endDate.split("-")
        return (startDate[1] === endDate[1]) ? `${months[parseInt(startDate[1]) - 1]} ${startDate[2]}-${endDate[2]}` : `${months[parseInt(startDate[1]) - 1]} ${startDate[2]} - ${months[parseInt(endDate[1]) - 1]} ${endDate[2]}`
    }

    let data = () => history.map(historyObj => (
        {
            name: name(historyObj.startDate, historyObj.endDate),
            balance: parseFloat(historyObj.balance / 100).toFixed(2),
            income: parseFloat(historyObj.income / 100).toFixed(2),
            expense: parseFloat(historyObj.expense / 100).toFixed(2)
        }
    ))

    return (
        <div>
            <p>Income and Expense over pay periods</p>
            <ResponsiveContainer width="99%" aspect={2}>
                <LineChart data={data()} margin={{top: 0, right: 0, left: -30, bottom: 0}}>
                    <XAxis dataKey="name" style={{fontSize:13}}/>
                    <YAxis style={{fontSize:13}}/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip separator=": $"/>
                    <Legend verticalAlign="top" height={36}/>
                    <Line type="monotone" dataKey="income" stroke="#8884d8" dot={{r:3}} />
                    <Line type="monotone" dataKey="expense" stroke="#82ca9d" dot={{r:3}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default IncomeAndExpense
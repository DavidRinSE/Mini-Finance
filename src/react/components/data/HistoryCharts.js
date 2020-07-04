import React from "react"
import Chart from "chart.js"

const generateBarExpense = (ref, data) => {
    const myChartRef = ref.current.getContext("2d")
    const labels = data.map(historyObj => historyObj.startDate).reverse()
    const expenses = data.map(historyObj => parseFloat(historyObj.expense / 100).toFixed(2)).reverse()
    new Chart(myChartRef, {
        type: "line",
        data: {
            //Bring in data
            labels: labels,
            datasets: [
                {
                    label: "Expense",
                    data: expenses,
                }
            ]
        },
        options: {
            //Customize chart options
        }
    });
}

const charts = [
    {
        name: "barExpenseChart",
        ref: React.createRef(),
        generator: generateBarExpense,
        minHistory: 1
    }
]


const HistoryCharts = (props) => {
    
}

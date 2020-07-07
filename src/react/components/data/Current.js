import React from "react"
import {ContentCard} from "../index"
import {ExpensesByCategory} from "./currentCharts"

const Current = (props) => {
    const transactions = props.data

    let charts = []
    let expenses = transactions.filter(trans => trans.isExpense)
    if(expenses.length > 2){
        charts.push(<ExpensesByCategory expenses={expenses}/>)
    }

    return (
        <ContentCard title="Current Charts">
            { charts.length > 0 &&
                charts
            }
            { charts.length === 0 &&
                <p>Not enough data for current charts. Keep tracking those transactions!</p>
            }
        </ContentCard>
    )
}
export default Current
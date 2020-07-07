import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHistory } from "../../../redux"
import {IncomeAndExpense, ExpensesByCategory} from "./historyCharts"
import {ContentCard} from "../index"

const History = (props) => {
    const dispatch = useDispatch()
    let history = useSelector(state => state.history.getHistory)

    useEffect(() => {
        if(!history.result && !history.loading){
            dispatch(getHistory())
        }
    })

    let charts = []

    if(history.result && history.result.length >= 2){
        charts.push(<IncomeAndExpense history={history.result} key="IncomeAndExpense"/>)
    }
    if(history.result && history.result.length >= 1){
        charts.push(<ExpensesByCategory history={history.result} key="ExpensesByCategory"/>)
    }

    return (
        <ContentCard title="Historic Charts">
            {(history.result && charts.length > 0) &&
               charts 
            }
            {(history.result && charts.length === 0) &&
                <p>Not enough information for historic charts. Keep tracking those transactions!</p>
            }
        </ContentCard>
    )
}

export default History
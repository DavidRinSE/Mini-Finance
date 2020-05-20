import React, {useEffect} from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux"
import { getHistory } from "../../../redux"
import Chart from "chart.js"

const useStyles = makeStyles({
    wrapper: {
        width: "85%",
        padding:15,
        backgroundColor: "lightgrey",
        borderWidth:1,
        borderRadius: 5,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, .5)",
        marginBottom: 10
    },
    title: {
        fontSize:18,
        fontFamily:'FredokaOne',
        textAlign: "left",
        paddingBottom:15,
        width: "100%"
    }
})

const History = (props) => {
    const classes = useStyles()
    let history = useSelector(state => state.history.getHistory)
    const dispatch = useDispatch()
    const chartRef = React.createRef();

    useEffect(() => {
        if(!history.result && !history.loading){
            dispatch(getHistory())
        }
        if(history.result && history.result.history){
            const myChartRef = chartRef.current.getContext("2d")
            const labels = history.result.history.map(historyObj => historyObj.startDate).reverse()
            const expenses = history.result.history.map(historyObj => historyObj.expense).reverse()
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

    }) 

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>History</h1>
            <canvas
                id="myChart"
                ref={chartRef}
            />
        </div>
    )
}

export default History
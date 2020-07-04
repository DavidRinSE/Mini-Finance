import React, {useEffect} from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux"
import { getHistory } from "../../../redux"
import {ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend} from "recharts"

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
    const dispatch = useDispatch()
    let history = useSelector(state => state.history.getHistory)

    let data = () => history.result.map(historyObj => (
        {
            name: `${historyObj.startDate.slice(5)}`,
            balance: parseFloat(historyObj.balance / 100).toFixed(2),
            income: parseFloat(historyObj.income / 100).toFixed(2),
            expense: parseFloat(historyObj.expense / 100).toFixed(2)
        }
    ))

    useEffect(() => {
        if(!history.result && !history.loading){
            dispatch(getHistory())
        }
    }) 

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>History</h1>
            {history.result &&
                <ResponsiveContainer width="99%" aspect={2}>
                    <LineChart width="100%" data={data()} margin={{top: 0, right: 0, left: -30, bottom: 0}}>
                        <XAxis dataKey="name" style={{fontSize:13}}/>
                        <YAxis style={{fontSize:13}}/>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip separator=": $"/>
                        <Legend verticalAlign="top" height={36}/>
                        <Line type="monotone" dataKey="income" stroke="#8884d8" dot={{r:3}} />
                        <Line type="monotone" dataKey="expense" stroke="#82ca9d" dot={{r:3}}/>
                    </LineChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

export default History
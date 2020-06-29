import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
 
const useStyles = makeStyles(() => ({
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
    },
    med: {
        fontSize:18,
    },
    small: {
        fontSize:14,
    }
}))

const Balance = (props) => {
    const classes = useStyles()
    let {balance, income, expense} = props.data
    balance = (balance === 0) ? 0 : parseFloat(props.data.balance / 100).toFixed(2)
    income = (income === 0) ? 0 : parseFloat(props.data.income / 100).toFixed(2)
    expense  = (expense === 0) ? 0 : parseFloat(props.data.expense / 100).toFixed(2)
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Account Details</h1>
            <Grid
                container
                justify="space-between"
            >
                <h2 className={classes.med}>Balance</h2>
                <h2 className={classes.med}>${balance}</h2>
            </Grid>
            <Grid
                container
                justify="space-between"
            >
                <h2 className={classes.small}>Income</h2>
                <h2 className={classes.small}>${income}</h2>
            </Grid>
            <Grid
                container
                justify="space-between"
            >
                <h2 className={classes.small}>Expenses</h2>
                <h2 className={classes.small}>${expense}</h2>
            </Grid>
        </div>
    )
}
export default Balance
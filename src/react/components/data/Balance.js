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
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Account Details</h1>
            <Grid
                container
                justify="space-between"
            >
                <h2 className={classes.med}>Balance</h2>
                <h2 className={classes.med}>${props.data.balance}</h2>
            </Grid>
            <Grid
                container
                justify="space-between"
            >
                <h2 className={classes.small}>Income</h2>
                <h2 className={classes.small}>${props.data.income}</h2>
            </Grid>
            <Grid
                container
                justify="space-between"
            >
                <h2 className={classes.small}>Expenses</h2>
                <h2 className={classes.small}>${props.data.expense}</h2>
            </Grid>
        </div>
    )
}
export default Balance
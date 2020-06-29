import React from "react"
import {Grid} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { dateString } from "../../helpers"

const useStyles = makeStyles({
    amount: {
        fontWeight: "bold",
    }
})

const Transaction = (props) => {
    let classes = useStyles()
    let sign = (props.data.isExpense) ? "-":"+"
    let color = (props.data.isExpense) ? "red":"green"
    let amount = (props.data.amount === 0) ? 0 : parseFloat(props.data.amount / 100).toFixed(2)
    return (
        <Grid
            container
            direction="column"
        >
            <h1>{props.data.name}</h1>
            <Grid
                container
                justify="space-between"
            >
                <h3>{dateString(props.data.date)}</h3>
                <h2 className={classes.amount} style={{color: color}}>{sign}${amount}</h2>
            </Grid>
        </Grid>
    )
}

export default Transaction
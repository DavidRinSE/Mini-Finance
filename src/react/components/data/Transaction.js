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
    let sign = (props.data.type === 'income') ? "+":"-"
    let color = (props.data.type === 'income') ? "green":"red"
    let classes = useStyles()
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
                <h2 className={classes.amount} style={{color: color}}>{sign}${props.data.amount}</h2>
            </Grid>
        </Grid>
    )
}

export default Transaction
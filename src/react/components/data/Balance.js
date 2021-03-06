import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, withWidth } from "@material-ui/core"
import {ContentCard} from "../index"
import {HomeTopbar} from "../index"

const useStyles = makeStyles(() => ({
    med: {
        fontSize:18,
    },
    small: {
        fontSize:14,
    },
    warning: {
        width: '100%',
        height: '15px',
        margin: '-15px 0 15px 0',
        backgroundColor: 'yellow'
    }
}))

const Balance = (props) => {
    const classes = useStyles()
    let {balance, income, expense, showDefault} = props.data
    balance = (balance === 0) ? 0 : parseFloat(props.data.balance / 100).toFixed(2)
    income = (income === 0) ? 0 : parseFloat(props.data.income / 100).toFixed(2)
    expense  = (expense === 0) ? 0 : parseFloat(props.data.expense / 100).toFixed(2)
    const warning = (showDefault) ? "Default data is shown, clear it by adding income." : false
    return (
        <ContentCard title="Account Details" warning={warning}>
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
            {(props.width === "lg" || props.width === "xl") && <HomeTopbar/>}
        </ContentCard>
    )
}
export default withWidth()(Balance)
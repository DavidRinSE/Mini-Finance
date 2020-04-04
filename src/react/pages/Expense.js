import React from "react"
import {ExpenseForm} from "../components"
import { Grid } from "@material-ui/core"

const Expense = (props) => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{height: "100%"}}
        >  
            <ExpenseForm />
        </Grid>
    )
}

export default Expense
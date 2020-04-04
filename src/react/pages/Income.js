import React from "react"
import {IncomeForm} from "../components"
import { Grid } from "@material-ui/core"

const Income = (props) => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{height: "100%"}}
        >  
            <IncomeForm />
        </Grid>
    )
}
export default Income
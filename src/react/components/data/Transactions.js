import React from "react"
import Transaction from "./Transaction"
import { makeStyles } from "@material-ui/core/styles"
import {Grid} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "85%",
        padding:15,
        backgroundColor: "lightgrey",
        borderWidth:1,
        borderRadius: 5,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, .5)"
    },
    title: {
        fontSize:18,
        fontFamily:'FredokaOne',
        textAlign: "left",
        paddingBottom:15,
        width: "100%"
    }
}))

const Transactions = (props) => {
    const classes = useStyles()
    let transactions = []
    if(props.data){
        transactions = props.data.map(trans => <Grid item style={{width: "100%"}}><Transaction data={trans} key={trans.id}/></Grid>)
    }
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Recent Activity</h1>
            <Grid
                container
                spacing={3}
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                {transactions}
            </Grid>
        </div>
    )
}

export default Transactions
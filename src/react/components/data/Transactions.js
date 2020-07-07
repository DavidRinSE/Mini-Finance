import React from "react"
import Transaction from "./Transaction"
import {Grid} from "@material-ui/core"
import {ContentCard} from "../index"

const Transactions = (props) => {
    const transactions = props.data.map(trans => 
        <Grid item style={{width: "100%"}} key={trans.id}>
            <Transaction data={trans}/>
        </Grid>
    )
    return (
        <ContentCard title="Recent Activity">
            <Grid
                container
                spacing={3}
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                {transactions}
                {transactions.length === 0 &&
                    <Grid item style={{width:"100%"}}>
                        <p>No transactions found, start tracking your finances to see data.</p>
                    </Grid>
                }
            </Grid>
        </ContentCard>
    )
}

export default Transactions
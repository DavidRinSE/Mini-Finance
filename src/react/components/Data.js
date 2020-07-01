import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux"
import {Transactions, Balance, History} from "./data/index.js"
import {Grid} from "@material-ui/core"

const Data = (props) => {
    let balance = useSelector(state => state.balance.getBalance)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!balance.result && !balance.loading){
            dispatch(getBalance())
        }
    })  

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            {balance.result &&
                <>
                    <Balance data={balance.result} />
                    <History />
                    <Transactions data={balance.result.transactions} />
                </>
            }
        </Grid>
    )
}

export default Data
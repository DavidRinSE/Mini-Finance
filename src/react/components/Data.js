import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux"
import {Transactions, Balance, History, Current} from "./data/index.js"
import {Grid, withWidth} from "@material-ui/core"

const Data = (props) => {
    let balance = useSelector(state => state.balance.getBalance)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!balance.result && !balance.loading){
            dispatch(getBalance())
        }
    })  

    if (props.width === "lg" || props.width === "xl" ){
        return (
            <Grid
                container
                direction="row"
            >
                {(balance.result && balance.result.transactions) &&
                    <>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="center"
                            style={{width:"50%", paddingLeft:"3.75%"}}
                        >
                                    <Balance data={balance.result} />
                                    <Transactions data={balance.result.transactions} />
                                    <Current data={balance.result.transactions}/>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="center"
                            style={{width:"50%", paddingRight:"3.75%"}}
                        >
                                    <History />
                        </Grid>
                    </>
                }
            </Grid>
        )
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            {(balance.result && balance.result.transactions) &&
                <>
                    <Balance data={balance.result} />
                    <History />
                    <Current data={balance.result.transactions}/>
                    <Transactions data={balance.result.transactions} />
                </>
            }
        </Grid>
    )
}

export default withWidth()(Data)
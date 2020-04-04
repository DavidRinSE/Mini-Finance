import React, {useEffect} from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../../redux"

const useStyles = makeStyles({
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
    }
})

const History = (props) => {
    const classes = useStyles()
    let history = useSelector(state => state.history.getHistory)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!history.result && !history.loading){
            dispatch(getHistory())
        }
    }) 

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>History</h1>
        </div>
    )
}

export default History
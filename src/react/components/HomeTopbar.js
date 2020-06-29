import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {AddCircleOutline} from "@material-ui/icons"
import {RemoveCircleOutline} from "@material-ui/icons"
import { NavLink } from "react-router-dom"
import { Button } from "@material-ui/core"

const useStyles = makeStyles({
    topbar: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 10
    },
    text: {
        fontSize:18,
        textAlign:"center",
        fontFamily:"FredokaOne",
    },
    button: {
        width: 90,
        height: 35,
        border: 1,
        fontSize: 10
    },
    buttonWrap: {
        display: "flex",
        justifyContent: "space-between",
        width: 285
    }
})

const HomeTopbar = (props) => {
    const classes = useStyles()
    const forwardLink = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)
    return (
        <div className={classes.topbar}>
            <div className={classes.buttonWrap}>
                <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    startIcon={<AddCircleOutline/>}
                    component={forwardLink} 
                    to="/income"
                    size="large" 
                >Income</Button>
                <Button
                    className={classes.button}
                    color="secondary"
                    variant="contained"
                    startIcon={<RemoveCircleOutline/>}
                    component={forwardLink} 
                    to="/expense"
                    size="large" 
                >Expense</Button>
            </div>
        </div>
    )
}

export default HomeTopbar
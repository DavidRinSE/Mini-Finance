import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {NavLink} from "react-router-dom"

const useStyles = makeStyles({
    wrapper: {
        width:'100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
        error: {
            fontSize:50,
            fontFamily:'FredokaOne'
        }
})

const Error = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.error}>404</h1>
            <p>Oops! I don't think this is working... <NavLink to="/home">Go Home</NavLink></p>
        </div>
    )
}
export default Error
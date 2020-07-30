import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "85%",
        maxWidth:738,
        backgroundColor: "lightgrey",
        borderWidth:0,
        borderRadius: 5,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, .5)",
        marginBottom: 10
    },
    padding: {
        padding: 15
    },
    title: {
        fontSize:18,
        fontFamily:'FredokaOne',
        textAlign: "left",
        paddingBottom:15,
        width: "100%"
    },
    warning: {
        width: '100%',
        height: '25px',
        background: 'lemonchiffon',
        borderWidth: 1,
        borderRadius: '5px 5px 0px 0xp',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}))

const ContentCard = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            {props.warning && <div className={classes.warning}>{props.warning}</div>}
            <div className={classes.padding}>
                <h1 className={classes.title}>{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}

export default ContentCard
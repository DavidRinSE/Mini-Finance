import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
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
}))

const ContentCard = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default ContentCard
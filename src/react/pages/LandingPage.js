import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles({
    header: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
    },
        titleWrap: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
            title: {
                color: "white",
                fontSize:35,
                fontFamily:'FredokaOne',
            },
            subtitle: {
                color: "white",
                fontSize:18,
                fontFamily:'FredokaOne'
            },
            link: {
                color: "white",
                textDecoration: "underline",
                fontFamily:'FredokaOne',
                marginTop:3
            },
        picture: {
            height: '55vh',
        }
})

const LandingPage = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <div className={classes.titleWrap}>
                <h1 className={classes.title}>Mini-Finance</h1>
                <h3 className={classes.subtitle}>Track your spending patterns and save!</h3>
                <NavLink className={classes.link} to='/login'>Continue to the app</NavLink>
            </div>
            <img className={classes.picture} src={require('../../pictures/App-Picture.png')} alt="Screenshot of the application"/>
            <div className={classes.headerContent}>
                
            </div>
        </div>
    )
}
export default LandingPage
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles(theme => ({
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
                fontSize:16,
                fontFamily:'FredokaOne'
            },
            link: {
                color: "white",
                textDecoration: "underline",
                fontFamily:'FredokaOne',
                marginTop:5
            },
        headerContent: {
            display:"flex",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
            },
            justifyContent:"center",
            alignItems:"center"
        },
            picture: {
                [theme.breakpoints.down('sm')]:{
                    height: '55vh',
                },
                [theme.breakpoints.up('md')]: {
                    height: '75vh',
                    minHeight: 545,
                    maxheight: 750
                },
                marginBottom:5
            },
            headerContentCard: {
                backgroundColor: "white",
                [theme.breakpoints.down('sm')]:{
                    width: "85vw",
                },
                [theme.breakpoints.up('md')]: {
                    width:"25vw",
                    minWidth: 295,
                    maxWidth: 400
                },
                height: "100px",
                boxShadow: "3px 3px 4px rgba(0, 0, 0, .5)",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center"
            },
                headerContentTitle: {
                    fontFamily:'FredokaOne',
                },
                unorderedList: {
                    listStyleType: "circle",
            }
}))

const LandingPage = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <div className={classes.titleWrap}>
                <h1 className={classes.title}>Mini-Finance</h1>
                <h3 className={classes.subtitle}>Track your spending patterns and save!</h3>
                <NavLink className={classes.link} to='/login'>Continue to the app</NavLink>
            </div>
            <div className={classes.headerContent}>
                <img className={classes.picture} src={require('../../pictures/App-Picture.png')} alt="Screenshot of the application"/>
                <div className={classes.headerContentCard}>
                    <h3 className={classes.headerContentTitle}>A portfolio project built with:</h3>
                    <ul className={classes.unorderedList}>
                        <li>Mobile first design</li>
                        <li>Latest frameworks and tools</li>
                        <li>GraphQL API backend</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LandingPage
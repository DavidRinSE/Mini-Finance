import React from "react"
import {Switch, Route} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import {Home, Income, Expense, Login, Signup} from "./pages"
import {userIsAuthenticated, userNotAuthenticated} from "./helpers/HOCs"

const useStyles = makeStyles({
    app:{
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplate: `75px ${window.innerHeight-75}px / auto`
    },
        header: {
            gridRow: "1 / span 1",
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
            title: {
                color: "white",
                fontSize:25,
                fontFamily:'FredokaOne'
            },
        content: {
            gridRow: "2 / span 1",
            padding: "20px 0px"
        }
})

const App = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.app}>
            <div className={classes.header}>
                <h1 className={classes.title}>Micro-Finance</h1>
            </div>
            <div className={classes.content}>
                <Switch>
                    <Route exact path="/" component={userIsAuthenticated(Home)} />
                    <Route exact path="/login" component={userNotAuthenticated(Login)} />
                    <Route exact path="/signup" component={userNotAuthenticated(Signup)} />
                    <Route exact path="/expense" component={userIsAuthenticated(Expense)} />
                    <Route exact path="/income" component={userIsAuthenticated(Income)} />
                </Switch>
            </div>
        </div>
    )
}
export default App
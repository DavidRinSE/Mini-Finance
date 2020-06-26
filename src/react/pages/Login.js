import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Grid,
    Button,
    CircularProgress
} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux"
import { getLoginToken } from "../../redux"

const useStyles = makeStyles((theme) => ({
    form: {
        width: "75vw",
        padding:10,
        backgroundColor: "lightgrey",
        borderWidth:1,
        borderRadius: 5,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, .5)"
    },
    TextField: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        
    },
    title: {
        fontSize:18,
        fontFamily:'FredokaOne',
        textAlign: "center",
        width: "100%"
    },
}))

const Login = () => {
    const classes = useStyles()
    const [state, setState] = React.useState({
        username: "",
        password: ""
    })
    // const [finished, setFinished] = React.useState(false)
    const loginState = useSelector(redux => redux.auth.login)
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        const name = event.target.name
        setState({
            ...state,
            [name]: event.target.value,
        })
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{height: "100%"}}
        >  
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.form}
            >
                <Grid item style={{width:"100%"}}>
                    <h1 className={classes.title}>Log in to your account</h1>
                </Grid>
                <Grid item style={{width:"100%"}}>
                    <FormControl fullWidth variant="outlined" className={classes.FormControl}>
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            value={state.username}
                            onChange={handleChange}
                            name="username"
                            labelWidth={60}
                        />
                    </FormControl>
                </Grid>
                <Grid item style={{width:"100%"}}>
                    <FormControl fullWidth variant="outlined" className={classes.FormControl}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            value={state.password}
                            onChange={handleChange}
                            name="password"
                            labelWidth={60}
                        />
                    </FormControl>
                </Grid>
                <Grid item style={{width: "100%"}}>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            disabled={loginState.loading}
                            onClick={() => {
                                dispatch(getLoginToken(state))
                                // setFinished(true)
                            }} 
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
                {loginState.loading && 
                    <div className={classes.loading}>
                        <CircularProgress size={20}/>
                    </div>
                }
                {loginState.error &&
                    <p>{ loginState.error }</p>
                }
            </Grid>
        </Grid>
    )
}

export default Login
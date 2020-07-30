import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    FormControl,
    FormControlLabel,
    InputLabel,
    TextField, 
    OutlinedInput, 
    InputAdornment,
    Grid,
    Button,
    Checkbox,
    CircularProgress
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { postIncome } from "../../redux"
import { Redirect } from "react-router-dom"


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
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
}))

const IncomeForm = (props) => {

    const classes = useStyles()
    const today = new Date();
    const date = today.getFullYear()+'-'+("0" + (today.getMonth()+1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
    const [state, setState] = React.useState({
        name: "",
        amount:"",
        date: date,
        newPeriod: false
    })
    const [finished, setFinished] = React.useState(false)
    const postState = useSelector(state => state.transactions.postIncome)
    const currentData = useSelector(state => state.balance.getBalance.result)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.checked || event.target.value,
        });
    }

    let checkComponent = <></>
    if(currentData.transactions && currentData.transactions.length > 0 && !currentData.showDefault) {
        if (!state.newPeriod){
            setState({
                ...state,
                newPeriod: true
            })
        }
        checkComponent = <Grid item style={{width:"100%"}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.newPeriod}
                                        onChange={handleChange}
                                        name="newPeriod"
                                        color="primary"
                                    />
                                }
                                label="Add to new period"
                            />
                        </Grid>
    }

    return (
        <>
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="flex-start"
            justify="center"
            className={classes.form}
            style={{}}
        >
            <Grid item style={{width:"100%"}}> 
                <h1 className={classes.title}>Add a new Income</h1>
            </Grid>
            <Grid item style={{width:"100%"}}>
                <FormControl fullWidth variant="outlined" className={classes.FormControl}>
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput
                        value={state.name}
                        onChange={handleChange}
                        name="name"
                        labelWidth={60}
                    />
                </FormControl>
            </Grid>
            
            <Grid item style={{width:"100%"}}>
                <FormControl fullWidth variant="outlined" className={classes.FormControl}>
                    <InputLabel>Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={state.amount}
                        onChange={handleChange}
                        name="amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>
            </Grid>
            
            <Grid item style={{width:"100%"}}>
                <div className={classes.FormControl}>
                    <TextField
                        name="date"
                        label="Date"
                        type="date"
                        value={state.date}
                        onChange={handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </Grid>
            {checkComponent}
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
                        disabled={postState.loading}
                        onClick={() => {
                            dispatch(postIncome({...state, amount: parseFloat(state.amount)}))
                            setFinished(true)
                        }} 
                    >Submit</Button>
                </Grid>
            </Grid>
            {postState.loading && 
                <div item className={classes.loading}>
                    <CircularProgress size={20}/>
                </div>
            }
        </Grid>
        {
         (finished && !postState.loading) &&
            <Redirect to="/home" />
        }
        </>
    )
}

export default IncomeForm
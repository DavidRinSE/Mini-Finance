import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Select, 
    FormControl, 
    InputLabel,
    TextField, 
    OutlinedInput, 
    InputAdornment,
    Grid,
    Button,
    CircularProgress
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { postExpense } from "../../redux"
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

const ExpenseForm = (props) => {
    const classes = useStyles()
    const today = new Date();
    const date = today.getFullYear()+'-'+("0" + (today.getMonth()+1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
    const [state, setState] = React.useState({
        name: "",
        category: "",
        amount:"",
        date: date
    })
    const [finished, setFinished] = React.useState(false)
    const postState = useSelector(redux => redux.transactions.postExpense)
    const dispatch = useDispatch()

    // const handleAmountChange = (event) => {
    //     const NON_DIGIT = /[0-9]*.?([0-9])+/g;
    //     if(NON_DIGIT.test(event.target.value)){
    //         setState({
    //             ...state,
    //             amount: event.target.value.match(NON_DIGIT),
    //         });
    //     }
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
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
                <h1 className={classes.title}>Add a new Expense</h1>
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
                <FormControl variant="outlined" fullWidth className={classes.Select}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        native
                        value={state.category}
                        onChange={handleChange}
                        label="Category"
                        inputProps={{
                            name: 'category',
                        }}
                    >
                        <option  value="" />
                        <option value={"Food"}>Food</option>
                        <option value={"Gas"}>Gas</option>
                        <option value={"Snacks"}>Snacks</option>
                        <option value={"Hobbies"}>Hobbies</option>
                    </Select>
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
                            dispatch(postExpense({...state, amount: parseFloat(state.amount)}))
                            setFinished(true)
                        }} 
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            {postState.loading && 
                <div className={classes.loading}>
                    <CircularProgress size={20}/>
                </div>
            }
        </Grid>
        {
         (finished && !postState.loading) &&
            <Redirect to="/" />
        }
        </>
    )
}

export default ExpenseForm
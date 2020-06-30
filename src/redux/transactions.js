import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
import {GET_BALANCE} from "./balance"
import {client} from "./index"
import {gql} from "apollo-boost"
import {createHistory as createHistoryAction} from "./history"

const POST_INCOME = createActions("POST_INCOME")
export const postIncome = (incomeData) => async (dispatch, getStore) => {
    dispatch(POST_INCOME.START());
    const {name, amount, date, category, newPeriod} = incomeData

    if(newPeriod) {
        await dispatch(createHistoryAction(date))
        if(!getStore().history.createHistory.result) {
            return dispatch(POST_INCOME.FAIL("Something went wrong, please try again."))
        }
    }


    return client.mutate({
        mutation: gql`
            mutation income {
                createTransaction(name:"${name}", amount: ${parseInt(amount * 100)}, date: "${date}", isExpense:false, category:"${category}") {
                    balance
                    income
                    expense
                    transactions {
                        name
                        category
                        amount
                        date
                        isExpense
                    }
                }
            }
        `
    }).then(res => {
        if (res.data && res.data.createTransaction){
            dispatch(GET_BALANCE.SUCCESS(res.data.createTransaction))
            return dispatch(POST_INCOME.SUCCESS())
        } else {
            return dispatch(POST_INCOME.FAIL((res.data.errors) ? res.data.errors : "Something went wrong, please try again."))
        }
    })
}

const POST_EXPENSE = createActions("POST_EXPENSE")
export const postExpense = (expenseData) => dispatch => {
    dispatch(POST_EXPENSE.START());
    const {name, amount, date, category} = expenseData
    return client.mutate({
        mutation: gql`
            mutation expense {
                createTransaction(name:"${name}", amount: ${parseInt(amount * 100)}, date: "${date}", isExpense:true, category:"${category}") {
                    balance
                    income
                    expense
                    transactions {
                        name
                        category
                        amount
                        date
                        isExpense
                    }
                }
            }
        `
    }).then(res => {
        if (res.data && res.data.createTransaction){
            dispatch(GET_BALANCE.SUCCESS(res.data.createTransaction))
            return dispatch(POST_EXPENSE.SUCCESS())
        } else {
            return dispatch(POST_EXPENSE.FAIL((res.data.errors) ? res.data.errors : "Something went wrong, please try again."))
        }
    })
}

export const reducers = {
    postIncome: createReducer(initialState, {
        ...asyncCases(POST_INCOME)
    }),
    postExpense: createReducer(initialState, {
        ...asyncCases(POST_EXPENSE)
    })
}
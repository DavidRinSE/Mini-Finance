import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
import {postIncome as incomeEndpoint, postExpense as expenseEndpoint} from "./data"
import {getBalance} from "./balance"

const POST_INCOME = createActions("POST_INCOME")
export const postIncome = (incomeData) => dispatch => {
    dispatch(POST_INCOME.START());
    let response = ""
    return incomeEndpoint(incomeData).then(res => {
        response = res
        return dispatch(getBalance())
    }).then(() => dispatch(POST_INCOME.SUCCESS(response)))
}

const POST_EXPENSE = createActions("POST_EXPENSE")
export const postExpense = (expenseData) => dispatch => {
    dispatch(POST_EXPENSE.START());
    let response = ""
    return expenseEndpoint(expenseData).then(res => {
        response = res
        return dispatch(getBalance())
    }).then(() => dispatch(POST_EXPENSE.SUCCESS(response)))
}

// export const postExpense = (expenseData) => dispatch => {
//     dispatch(_postExpense(expenseData)).then(() => dispatch(getBalance()))
// }

export const reducers = {
    postIncome: createReducer(initialState, {
        ...asyncCases(POST_INCOME)
    }),
    postExpense: createReducer(initialState, {
        ...asyncCases(POST_EXPENSE)
    })
}
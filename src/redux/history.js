import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
import {newPeriod as newPeriodEndpoint} from "./data"
import {GET_BALANCE} from "./balance"
import {client} from './index'
import {gql} from 'apollo-boost'

const GET_HISTORY = createActions("GET_HISTORY")
export const getHistory = () => dispatch => {
    dispatch(GET_HISTORY.START());

    return client.query({
        query: gql`
            query history {
                history {
                    balance
                    income
                    expense
                    startDate
                    endDate
                    categories {
                      name
                      amount
                    }
                }
            }
        `
    }).then(res => {
        if (res.data && res.data.history){
            dispatch(GET_HISTORY.SUCCESS(res.data.history))
        } else {
            dispatch(GET_HISTORY.FAIL("Something went wrong, please log out and try again."))
        }
    })
}

const NEW_PERIOD = createActions("NEW_PERIOD")
export const newPeriod = () => dispatch => {
    dispatch(NEW_PERIOD.START())
    let result = ""
    return newPeriodEndpoint().then(res => {
        result = res
        return dispatch(GET_HISTORY.SUCCESS(result.history))
    }).then(() => {
        return dispatch(GET_BALANCE.SUCCESS(result.finance))
    }).then(() => {
        return dispatch(NEW_PERIOD.SUCCESS())
    })
}


export const reducers = {
    getHistory: createReducer(initialState, {
        ...asyncCases(GET_HISTORY)
    }),
    newPeriod: createReducer(initialState, {
        ...asyncCases(NEW_PERIOD)
    })
}
import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
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

const CREATE_HISTORY = createActions("NEW_PERIOD")
export const createHistory = (endDate) => dispatch => {
    dispatch(CREATE_HISTORY.START())
    return client.mutate({
        mutation: gql`
            mutation createHistory {
                createHistory(endDate: "${endDate}") {
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
            }
        `
    }).then(res => {
        if (res.data && res.data.createHistory){
            dispatch(GET_HISTORY.SUCCESS(res.data.createHistory.history))
            return dispatch(CREATE_HISTORY.SUCCESS("Success"))
        } else {
            return dispatch(CREATE_HISTORY.FAIL((res.errors) ? res.errors : "Something went wrong, please try again."))
        }
    })
}


export const reducers = {
    getHistory: createReducer(initialState, {
        ...asyncCases(GET_HISTORY)
    }),
    createHistory: createReducer(initialState, {
        ...asyncCases(CREATE_HISTORY)
    })
}
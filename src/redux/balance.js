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

export const GET_BALANCE = createActions("GET_BALANCE")
export const getBalance = () => dispatch => {
    dispatch(GET_BALANCE.START());

    return client.query({
        query: gql`
            query user {
                user {
                    balance
                    expense
                    income
                    showDefault
                    transactions {
                        id
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
        if (res.data && res.data.user){
            dispatch(GET_BALANCE.SUCCESS(res.data.user))
        } else {
            dispatch(GET_BALANCE.FAIL("Something went wrong, please log out and try again."))
        }
    })
}

export const reducers = {
    getBalance: createReducer(initialState, {
        ...asyncCases(GET_BALANCE)
    })
}
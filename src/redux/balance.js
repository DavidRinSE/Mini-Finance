import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
import {getFinance} from "./data"

export const GET_BALANCE = createActions("GET_BALANCE")
export const getBalance = () => dispatch => {
    dispatch(GET_BALANCE.START());

    return getFinance().then(res => dispatch(GET_BALANCE.SUCCESS(res)))
}

export const reducers = {
    getBalance: createReducer(initialState, {
        ...asyncCases(GET_BALANCE)
    })
}
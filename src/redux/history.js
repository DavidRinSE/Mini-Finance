import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
import {getHistory as getHistoryEndpoint, newPeriod as newPeriodEndpoint} from "./data"
import {GET_BALANCE} from "./balance"

const GET_HISTORY = createActions("GET_HISTORY")
export const getHistory = () => dispatch => {
    dispatch(GET_HISTORY.START())
    return getHistoryEndpoint().then((res) => {
        dispatch(GET_HISTORY.SUCCESS(res))
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
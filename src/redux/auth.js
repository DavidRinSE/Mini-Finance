import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
import {logIn} from "./data"

export const LOG_IN = createActions("LOG_IN")
export const getLoginToken = (username, password) => dispatch => {
    dispatch(LOG_IN.START());

    return logIn(username, password).then(res => dispatch(LOG_IN.SUCCESS(res)))
}

export const reducers = {
    logIn: createReducer(initialState, {
        ...asyncCases(LOG_IN)
    })
}
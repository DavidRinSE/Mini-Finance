import {
    // domain,
    // jsonHeaders,
    // handleJsonResponse,
    initialState,
    asyncCases,
    createActions,
    createReducer
} from "./helpers"
import {client} from "./index"
import {gql} from "apollo-boost"

export const LOG_IN = createActions("LOG_IN")
export const getLoginToken = (data) => dispatch => {
    dispatch(LOG_IN.START());
    const {username, password} = data

    return client.mutate({
        mutation: gql`
            mutation login {
                login(username: "${username}", password: "${password}") {
                    token
                    error {
                        message
                    }
                }
            }
        `
    }).then(res => {
        if(res.data && res.data.login){
            if(res.data.login.token){
                dispatch(LOG_IN.SUCCESS(res.data.login.token))
            } else if (res.data.login.error) {
                dispatch(LOG_IN.FAIL(res.data.login.error.message))
            } else {
                dispatch(LOG_IN.FAIL("Something went wrong 😖"))
            }
        } else {
            dispatch(LOG_IN.FAIL("Something went wrong 😖"))
        }
    })
    // return logIn(username, password).then(res => dispatch(LOG_IN.SUCCESS(res)))
}

export const reducers = {
    login: createReducer(initialState, {
        ...asyncCases(LOG_IN)
    })
}
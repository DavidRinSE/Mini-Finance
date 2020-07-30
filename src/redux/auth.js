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
export const getLoginToken = (input) => dispatch => {
    dispatch(LOG_IN.START());
    const {username, password} = input

    return client.mutate({
        mutation: gql`
            mutation login {
                login(username: "${username}", password: "${password}") {
                    token
                }
            }
        `
    }).then(res => {
        const {data} = res
        if(data && data.login && data.login.token){
            dispatch(LOG_IN.SUCCESS(res.data.login.token))
        } else {
            dispatch(LOG_IN.FAIL("Something went wrong 😖"))
        }
    }).catch(e => {
        if(e.graphQLErrors) {
            dispatch(LOG_IN.FAIL(e.graphQLErrors[0].message))
        }
    })
    // return logIn(username, password).then(res => dispatch(LOG_IN.SUCCESS(res)))
}

export const SIGN_UP = createActions("SIGN_UP")
export const signUpUser = (input) => dispatch => {
    dispatch(SIGN_UP.START());
    const {username, password} = input

    return client.mutate({
        mutation: gql`
            mutation createUser {
                createUser(username: "${username}", password: "${password}") {
                    token
                }
            }
        `
    }).then(res => {
        if(res.data && res.data.createUser){
            const {data} = res
            if(data.createUser.token){
                dispatch(LOG_IN.SUCCESS(res.data.createUser.token))
                dispatch(SIGN_UP.SUCCESS("Success!"))
            } else {
                dispatch(SIGN_UP.FAIL("Something went wrong 😖"))
            }
        } else {
            dispatch(SIGN_UP.FAIL("Something went wrong 😖"))
        }
    }).catch(e => {
        if(e.graphQLErrors){
            dispatch(SIGN_UP.FAIL(e.graphQLErrors[0].message))
        }
    })
    // return logIn(username, password).then(res => dispatch(LOG_IN.SUCCESS(res)))
}

export const reducers = {
    login: createReducer(initialState, {
        ...asyncCases(LOG_IN)
    }),
    signUp: createReducer(initialState, {
        ...asyncCases(SIGN_UP)
    })
}
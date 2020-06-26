import {connectedRouterRedirect} from "redux-auth-wrapper/history4/redirect"

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: "/login",
    authenticatedSelector: state =>
        state.auth &&
        state.auth.login &&
        state.auth.login.result !== null,

    wrapperDisplayName: "UserIsAuthenticated"
})

export const userNotAuthenticated = connectedRouterRedirect({
    redirectPath: "/",
    authenticatedSelector: state =>
        (state.auth && state.auth.login && state.auth.login.result === null) || (state.auth.login.error),
    allowRedirectBack: false,
    wrapperDisplayName: "UserNotAuthenticated"
})
import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ApolloClient from "apollo-boost"
import { connectRouter } from "connected-react-router";
import {reducers as balanceReducers} from "./balance"
import {reducers as transactionReducers} from "./transactions"
import {reducers as historyReducers} from "./history"
import {reducers as authReducers} from "./auth"

export * from "./balance"
export * from "./transactions"
export * from "./history"
export * from "./auth"

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    balance: combineReducers(balanceReducers),
    transactions: combineReducers(transactionReducers),
    history: combineReducers(historyReducers),
    auth: combineReducers(authReducers),
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})
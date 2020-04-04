import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {reducers as balanceReducers} from "./balance"
import {reducers as transactionReducers} from "./transactions"
import {reducers as historyReducers} from "./history"

export * from "./balance"
export * from "./transactions"
export * from "./history"

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    balance: combineReducers(balanceReducers),
    transactions: combineReducers(transactionReducers),
    history: combineReducers(historyReducers)
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});
import React from 'react'
import { connect } from 'react-redux'

import Immutable from "immutable"
import immutableDev from "immutable-devtools"

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { syncHistoryWithStore } from "react-router-redux";
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Router, browserHistory, Route, IndexRoute } from "react-router";

import reducers from '../store/reducers/reducers'

import Header from '../components/header/Header'
import Queries from '../components/queries/Queries'
import Keywords from '../components/keywords/Keywords'
import Users from '../components/users/Users'
import NotAvailable from '../components/NotAvailable'

import { getCurrentUser } from '../store/actions/userActions'

immutableDev(Immutable)

let middleware = null

if (process.env.NODE_ENV === "production") {
  middleware = applyMiddleware(thunk)
} else {
  const logger = createLogger()
  middleware = applyMiddleware(thunk, logger)
}

const store = createStore(
  reducers,
  middleware,
)

store.dispatch(getCurrentUser())

// Debug
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== "production") {
  window.store = store
}

const RouterApp = connect(state => ({isLoggedIn: state.user.is_login}))(({ history, isLoggedIn }) => (
  <Router history={ history }>
    <Route path="/" component={ Header }>
      <IndexRoute component={ Queries }/>
      <Route path="keywords" component={ isLoggedIn ? Keywords : NotAvailable}/>
      <Route path="users" component={ isLoggedIn ? Users : NotAvailable}/>
    </Route>
  </Router>
))

export default () => {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <RouterApp history={history}/>
    </Provider>
  );
};


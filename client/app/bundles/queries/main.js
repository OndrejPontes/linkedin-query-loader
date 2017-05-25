import React from 'react'
import ReactDOM from 'react-dom'

import Immutable from "immutable"
import immutableDev from "immutable-devtools"

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { syncHistoryWithStore } from "react-router-redux";
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Router, browserHistory, Route, IndexRoute } from "react-router";

import reducers from './store/reducers/reducers'

import Header from './components/header/Header'
import Queries from './components/queries/Queries'
import Keywords from './components/keywords/Keywords'

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

// Debug
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== "production") {
  window.store = store
}

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={ Header }>
        <IndexRoute component={ Queries }/>
        <Route path="keywords" component={ Keywords }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
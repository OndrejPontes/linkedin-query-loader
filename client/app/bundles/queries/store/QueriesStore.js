import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import authMiddleware from '../middleware/auth'
import auth from '../reducers/auth'
import query from '../reducers/query'
import queries from '../reducers/queries'
import queryBuilder from '../reducers/queryBuilder'
import modals from '../reducers/modals'
import user from '../reducers/user'

const loggerMiddleware = createLogger()

const configStore= () => {
  const store = createStore(
    combineReducers({
      modals,
      query,
      queries,
      queryBuilder,
      user,
      routing
    }),
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      authMiddleware
    ),
  );

  return store;
};

export default configStore
import { createStore, combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'
import query from '../reducers/query'
import queries from '../reducers/queries'
import queryBuilder from '../reducers/queryBuilder'

const configStore = preloadedState => {
  const store = createStore(
    combineReducers({
      query,
      queries,
      queryBuilder,
      // preloadedState,
      routing
    })
  );

  return store;
};


export default configStore
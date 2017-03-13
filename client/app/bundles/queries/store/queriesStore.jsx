import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
  const { queries } = props;
  const { $$queriesState } = initialStates;

  const initialState = {
    $$queriesStore: $$queriesState.merge({
      $$queries: queries
    })
  };

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  );
  const storeCreator = composedStore(createStore);
  return storeCreator(reducer, initialState);
}
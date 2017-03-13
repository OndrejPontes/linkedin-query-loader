import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
  const { queries } = props;
  const { $$queriesState } = initialStates;

  // console.log("--------SiteState-------");
  // console.log($$queryState.name);
  // console.log("--------Queries-------");
  // console.log(queries);

  const initialState = {
    $$queriesStore: $$queriesState.merge({
      $$queries: queries
    })
  };

  // console.log("--------SiteStore-------");
  // console.log(initialState.$$siteStore.get('queries'));

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  );
  const storeCreator = composedStore(createStore);
  return storeCreator(reducer, initialState);
}
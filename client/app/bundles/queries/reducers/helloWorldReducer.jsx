import Immutable from 'immutable';

import actionTypes from '../constants/helloWorldConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
  $$queries: []
});

export default function helloWorldReducer($$state = $$initialState, action) {
  const { type, value } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', value);

    case actionTypes.ADD_QUERY:
      return $$state.set('queries', $$state.queries.concat([value]));

    default:
      return $$state;
  }
}

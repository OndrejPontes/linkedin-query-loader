import { Map } from 'immutable';

import {
  ADD_PREDICATE,
  CREATE_QUERY,
  OPEN_LINKEDIN,
  COPY_QUERY
} from '../constants/ActionTypes';

export const $$initialState = Map({
  name: '', // this is the default state that would be used if one were not passed into the store
  $$queries: []
});

export default function helloWorldReducer($$state = $$initialState, action) {
  const { type, value } = action;

  switch (type) {
    case ADD_PREDICATE:
      console.log('ADD_PREDICATE');
      // return $$state.set('name', value);
      return $$state;

    case CREATE_QUERY:
      console.log('CREATE_QUERY');
    // return $$state.set('queries', $$state.queries.concat([value]));
      return $$state;


    case OPEN_LINKEDIN:
      console.log('OPEN_LINKEDIN');
    // return $$state.set('queries', $$state.queries.concat([value]));
      return $$state;

    case COPY_QUERY:
      console.log('COPY_QUERY');
    // return $$state.set('queries', $$state.queries.concat([value]));
      return $$state;

    default:
      return $$state;
  }
}

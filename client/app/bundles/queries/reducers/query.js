import { ADD_PREDICATE, ADD_KEYWORD, CLEAR_BUILDER, PREPARE_TO_COPY } from '../constants/ActionTypes'

const query = (state = {value: '', keys: [], valueToCopy: ''}, action) => {
  switch (action.type) {
    case ADD_PREDICATE:
      return Object.assign({}, state, {
        value: state.value + ((state.value === '') ? '' : ' ') + action.predicate
      })
    case ADD_KEYWORD:
      return Object.assign({}, state, {
        value: state.value + ((state.value === '') ? '{' : ' {') + state.keys.length + '}',
        keys: [...state.keys, action.keyword]
      })
    case CLEAR_BUILDER:
      return { value: '', keys: [], valueToCopy: '' }
    case PREPARE_TO_COPY:
      document.querySelector("#queryBuilder").value  = action.value;
      return Object.assign({}, state, { valueToCopy: action.value })
    default:
      return state
  }
}

export default query
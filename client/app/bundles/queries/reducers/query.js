import { ADD_PREDICATE, ADD_KEYWORD } from '../constants/ActionTypes'

const query = (state = {value: '', keys: []}, action) => {
  switch (action.type) {
    case ADD_PREDICATE:
      //TODO: connect with queryBuilder reducer if it is possible
      console.log('Add predicate ' + action.predicate)
      return Object.assign({}, state, {
        value: state.value + ((state.value === '') ? '' : ' ') + action.predicate
      })
    case ADD_KEYWORD:
      //TODO: connect with queryBuilder reducer if it is possible
      console.log('Add predicate ' + action.keyword)
      return Object.assign({}, state, {
        value: (state.value + (state.value === '') ? '{' : ' {') + state.keys.length + '}',
        keys: [...state.keys, action.keyword]
      })
    default:
      return state
  }
}

export default query
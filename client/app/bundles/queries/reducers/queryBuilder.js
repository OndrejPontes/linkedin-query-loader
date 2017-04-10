import {
  ADD_TO_QUERY_BUILDER,
  QUERY_BUILDER_ON_CHANGE,
  CLEAR_BUILDER
} from '../constants/ActionTypes'

const queryBuilder = (state = '', action) => {
  switch (action.type) {
    case ADD_TO_QUERY_BUILDER:
      return state + ((state === '') ? '' : ' ') + action.toQueryBuilder
    case QUERY_BUILDER_ON_CHANGE:
      return action.value
    case CLEAR_BUILDER:
      return ''
    default:
      return state
  }
}

export default queryBuilder
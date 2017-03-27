import { ADD_TO_QUERY_BUILDER } from '../constants/ActionTypes'

const queryBuilder = (state = '', action) => {
  switch (action.type) {
    case ADD_TO_QUERY_BUILDER:
      return state + ((state === '') ? '' : ' ') + action.toQueryBuilder
    default:
      return state
  }
}

export default queryBuilder
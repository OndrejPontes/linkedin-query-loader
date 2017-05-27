import { List } from 'immutable'
import Query, { QUERY_TYPES } from "../../../containers/Query"

import { ADD_QUERY, REMOVE_QUERY, UPDATE_QUERY, GET_QUERIES, RESET_QUERIES } from "../../actions/queriesActions"
import { and, or, not, leftBracket, rightBracket } from "./constQueries"
import tempQueries from "./tempQueries"

// const INIT_STATE = List([and, or, not, leftBracket, rightBracket, ...tempQueries])
const INIT_STATE = List([and, or, not, leftBracket, rightBracket])

const queriesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_QUERY:
      return state.push(action.convert ? new Query({
        id: action.query.id,
        name: action.query.name,
        value: action.query.value,
        type: action.query.items.length === 0 ? QUERY_TYPES.ELEMENTARY : QUERY_TYPES.COMPLEX,
        items: List(action.query.items.map(item => state.find(q => q.get('name') === item))),
      }) : action.query)
    case REMOVE_QUERY:
      return state.remove(action.index)
    case UPDATE_QUERY:
      return state.set(state.findIndex(query => query.get('id') === action.query.get('id')), action.query)
    case GET_QUERIES:
      const queries = action.queries.sort((a, b) => {
        if (a.items.length <= 1 && b.items.length <= 1) {
          return 0
        }
        if (a.items.length <= 1 && b.items.length > 1 || a.items.length > 1 && b.items.length <= 1) {
          return a.items.length - b.items.length
        }
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      })

      let newState = state

      for (let i = 0; i < queries.length; i++) {
        const query = queries[i]
        newState = newState.push(new Query({
          id: query.id,
          name: query.name,
          value: query.value,
          items: List(query.items.map(item => newState.find(s => s.get('name') === item))),
          created_at: new Date(query.created_at),
          updated_at: new Date(query.updated_at),
          type: query.items.length <= 1 ? QUERY_TYPES.ELEMENTARY : QUERY_TYPES.COMPLEX
        }))
      }

      return newState
    case RESET_QUERIES:
      return INIT_STATE
    default:
      return state
  }
}

export default queriesReducer

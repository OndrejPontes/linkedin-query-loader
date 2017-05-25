import { List } from 'immutable'

import { ADD_QUERY, REMOVE_QUERY, UPDATE_QUERY } from "../../actions/queriesActions"
import { and, or, not, leftBracket, rightBracket } from "./constQueries"
import tempQueries from "./tempQueries"

const INIT_STATE = List([and, or, not, leftBracket, rightBracket, ...tempQueries])

const queriesReducer = (state = INIT_STATE, action) => {
	switch(action.type) {
		case ADD_QUERY:
			return state.push(action.query)
		case REMOVE_QUERY:
			return state.remove(action.index)
		case UPDATE_QUERY:
			return state.set(action.index, action.query)
		default:
			return state
	}
}

export default queriesReducer

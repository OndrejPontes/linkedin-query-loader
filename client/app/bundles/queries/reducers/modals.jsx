import {
  TOGGLE_CREATE_QUERY,
  TOGGLE_UPDATE_QUERY
} from '../constants/ActionTypes'

const modals = (state = { addQuery: false, updateQuery: false }, action) => {
  switch (action.type) {
    case TOGGLE_CREATE_QUERY:
      return Object.assign({}, state, { addQuery: !state.addQuery })
    case TOGGLE_UPDATE_QUERY:
      return Object.assign({}, state, { updateQuery: !state.addQuery })
    default:
      return state
  }
}

export default modals
import { ADD_USER, REMOVE_USER } from "../actions/userActions"

const INIT_STATE = {name: '', image_url: '', is_admin: false, is_login: false}

const user = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.user ?
        Object.assign(
          {},
          state,
          {
            name: action.user.name,
            image_url: action.user.image_url,
            is_admin: action.user.is_admin,
            is_login: true
          }
        ) : state
    case REMOVE_USER:
      return INIT_STATE
    default:
      return state
  }
}

export default user

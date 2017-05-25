import { ADD_CURRENT_USER, REMOVE_CURRENT_USER } from '../constants/ActionTypes'

const user_obj = {
  name: "",
  is_admin: false,
}

const user = (state = user_obj, action) => {
  switch (action.type) {
    case ADD_CURRENT_USER:
      return action.user ? Object.assign({}, state,
        {
          name: action.user.name,
          is_admin: action.user.is_admin,
        }
      ) : user_obj
    case REMOVE_CURRENT_USER:
      return user_obj
    default:
      return state
  }
}

export default user
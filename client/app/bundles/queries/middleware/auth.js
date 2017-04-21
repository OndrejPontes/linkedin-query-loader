import { setToken, removeToken } from '../util/token'
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/ActionTypes'

const authMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setToken(action.token)
      break
    case LOGIN_FAILURE:
    case LOGOUT:
      removeToken()
      break
  }

  return next(action)
}

export default authMiddleware

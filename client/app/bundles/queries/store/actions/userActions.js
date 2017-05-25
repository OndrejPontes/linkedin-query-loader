import axios from 'axios'

export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"

export function getCurrentUser() {
  return function (dispatch) {
    return axios.get('/current_user')
      .then(function (response) {
        dispatch({ type: ADD_USER, user: response.data})
      })
  }
}

export function logout() {
  return function (dispatch) {
    return axios.delete('/logout')
      .then(function () {
        dispatch({type: REMOVE_USER})
      })
  }
}
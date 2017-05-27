import axios from 'axios'
import { loadQueries, RESET_QUERIES } from './queriesActions'

export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"

export function getCurrentUser() {
  return function (dispatch) {
    return axios.get('/current_user')
      .then(function (response) {
        dispatch({type: ADD_USER, user: response.data})
        response.data && dispatch(loadQueries())
      })
  }
}

export function logout() {
  return function (dispatch) {
    return axios.delete('/logout')
      .then(function () {
        dispatch({type: REMOVE_USER})
        dispatch({type: RESET_QUERIES})
      })
  }
}
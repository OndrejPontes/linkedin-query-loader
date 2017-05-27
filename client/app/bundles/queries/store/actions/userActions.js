import axios from 'axios'
import { loadQueries, RESET_QUERIES } from './queriesActions'

export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"
export const GET_USERS = "GET_USERS"
export const CHANGE_PERMISSIONS = "CHANGE_PERMISSIONS"

export function getCurrentUser() {
  return function (dispatch) {
    return axios.get('/api/current_user')
      .then(function (response) {
        dispatch({type: ADD_USER, user: response.data})
        response.data && dispatch(loadQueries())
        dispatch(getUsers())
      })
  }
}

export function logout() {
  return function (dispatch) {
    return axios.delete('/api/logout')
      .then(function () {
        dispatch({type: REMOVE_USER})
        dispatch({type: RESET_QUERIES})
      })
  }
}

export function getUsers() {
  return function (dispatch) {
    return axios.get('/api/users')
      .then(function (response) {
        dispatch({type: GET_USERS, users: response.data})
      })
  }
}

export function changePermissions(id, isAdmin) {
  return function (dispatch) {
    return axios.put('/api/users/' + id, {is_admin: isAdmin})
      .then(function () {
        dispatch({type: CHANGE_PERMISSIONS, id, isAdmin})
      })
  }
}
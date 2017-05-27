import axios from 'axios'

export const ADD_QUERY = "ADD_QUERY"
export const REMOVE_QUERY = "REMOVE_QUERY"
export const UPDATE_QUERY = "UPDATE_QUERY"
export const GET_QUERIES = "GET_QUERIES"
export const RESET_QUERIES = "RESET_QUERIES"

export const addQuery = query => ({
  type: ADD_QUERY,
  query,
})

export const removeQuery = index => ({
  type: REMOVE_QUERY,
  index,
})

export function updateQuery(query) {
  return function (dispatch) {
    return axios.put('/queries/' + query.id, {
      name: query.get('name'),
      value: query.get('value'),
      items: query.get('items').map(q => q.get('name')).toArray(),
    })
      .then(function () {
        dispatch({
          type: UPDATE_QUERY,
          query,
        })
      })
  }
}

export function addQueryToDb(query) {
  return function (dispatch) {
    return axios.post('/queries', query)
      .then(function (response) {
        dispatch({
          type: ADD_QUERY,
          query: response.data,
          convert: true
        })
      })
  }
}

export function loadQueries() {
  return function (dispatch) {
    return axios.get('/queries')
      .then(function (response) {
        dispatch({type: GET_QUERIES, queries: response.data})
      })
  }
}
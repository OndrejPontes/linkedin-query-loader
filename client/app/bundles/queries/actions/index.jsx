import axios from 'axios'
import {
  ADD_KEYWORD,
  CREATE_QUERY,
  ADD_PREDICATE,
  ADD_TO_QUERY_BUILDER,
  OPEN_LINKEDIN,
  COPY_QUERY,
  REQUEST_QUERIES,
  RECEIVE_QUERIES,
  UPDATE_QUERY,
  DELETE_QUERY,
  TOGGLE_CREATE_QUERY,
  TOGGLE_UPDATE_QUERY,
  RECEIVE_QUERY
} from '../constants/ActionTypes'

function shouldFetchQueries(queries) {
  if(queries.isFetching) {
    return false
  } else {
    return queries.isInvalidate
  }
}

function fetchQueries() {
  return function (dispatch) {
    dispatch(requestQueries())
    return axios.get('/queries')
      .then(function (response) {
        dispatch(receiveQueries(response.data))
      })
  }
}

const deletedQuery = (id) => ({
  type: DELETE_QUERY,
  id: id
})

export const addPredicate = (predicate) => ({
  type: ADD_PREDICATE,
  predicate
});
export const openLinkedIn = (url) => ({
  type: OPEN_LINKEDIN,
  url: url
});

export const copyQuery = (queryBuilder) => ({
  type: COPY_QUERY,
  queryBuilder: queryBuilder
});

export const addToQueryBuilder = (value) => ({
  type: ADD_TO_QUERY_BUILDER,
  toQueryBuilder: value
})

export const addKeyword = (value) => ({
  type: ADD_KEYWORD,
  keyword: value
})

export const requestQueries = () => ({
  type: REQUEST_QUERIES
})

export const receiveQueries = (queries) => ({
  type: RECEIVE_QUERIES,
  queries,
  receiveAt: Date.now()
})

export const receiveQuery = (query) => ({
  type: RECEIVE_QUERY,
  query
})

export const toggleModal = () => ({
  type: TOGGLE_CREATE_QUERY
})

export const toggleUpdateQuery = () => ({
  type: TOGGLE_UPDATE_QUERY
})

export function createQuery(query) {
  return function (dispatch) {
    return axios.post('/queries', query)
      .then(function (response) {
        dispatch(receiveQuery(response.data))
      })
  }
}

export function fetchQueryIfNeeded() {
  return function (dispatch, getState) {
    if(shouldFetchQueries(getState().queries)){
      return dispatch(fetchQueries())
    } else {
      return Promise.resolve()
    }
  }
}

export function updateQuery(query) {
  return function (dispatch) {
    return axios.put('/queries/' + query.id, query)
      .then(function () {
        dispatch(receiveQuery(query))
      })
  }
}

export function deleteQuery(id) {
  return function (dispatch) {
    return axios.delete('/queries/' + id)
      .then(function () {
        dispatch(deletedQuery(id))
      })
  }
}
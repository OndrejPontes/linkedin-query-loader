import axios from 'axios'
import {
  ADD_KEYWORD,
  ADD_CURRENT_USER,
  REMOVE_CURRENT_USER,
  QUERY_BUILDER_ON_CHANGE,
  ADD_PREDICATE,
  ADD_TO_QUERY_BUILDER,
  OPEN_LINKEDIN,
  COPY_QUERY,
  REQUEST_QUERIES,
  RECEIVE_QUERIES,
  CLEAR_BUILDER,
  DELETE_QUERY,
  TOGGLE_CREATE_QUERY,
  TOGGLE_UPDATE_QUERY,
  RECEIVE_QUERY,
  PREPARE_TO_COPY
} from '../constants/ActionTypes'

function shouldFetchQueries(queries) {
  if (queries.isFetching) {
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

const openLinkedInObject = (url) => ({
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

export const toggleCreateModal = () => ({
  type: TOGGLE_CREATE_QUERY
})

export const toggleUpdateQuery = () => ({
  type: TOGGLE_UPDATE_QUERY
})

export const queryBuilderOnChange = (e) => ({
  type: QUERY_BUILDER_ON_CHANGE,
  value: e.target.value
})

export const clearQueryBuilder = () => ({
  type: CLEAR_BUILDER
})

const prepareToCopyObject = (value) => ({
  type: PREPARE_TO_COPY,
  value: value
})

export function validateAndCreateQuery(name) {
  return function (dispatch, getState) {
    let keys = []
    let value = getState().queryBuilder
    const queries = getState().queries.items
    getState().queryBuilder.split(/[() ]+/).filter(String).forEach(name => {
        if (queries.some(q => q.name === name)) {
          value = value.replace(name, '{' + keys.length + '}')
          keys.push(name)
        }
      }
    )
    dispatch(createQuery(Object.assign(
      {},
      getState().query,
      {
        name: name,
        keys: keys,
        value: value
      }
    )))
  }
}

function createQuery(query) {
  return function (dispatch) {
    return axios.post('/queries', query)
      .then(function (response) {
        dispatch(receiveQuery(response.data))
      })
  }
}

export function fetchQueryIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchQueries(getState().queries)) {
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

function returnTrueValue(getState, name) {
  const query = getState().queries.items.find(q => q.name === name)
  let result = ''
  if(query !== undefined){
    if(query.keys.length === 0) {
      return query.value
    }
    const e = query.value.split(/{\d}/)
    for (let i = 0; i < e.length-1; i++) {
      result += e[i] + returnTrueValue(getState, query.keys[i])
    }
    result += e[e.length-1]
    return result
  }
  return name
}

function getQueryValue(getState) {
  const potentialKeywords = getState().query.value.split(/{\d}/)
  let finalValue = ''
  for (let i = 0; i < potentialKeywords.length-1; i++) {
    finalValue += potentialKeywords[i] + returnTrueValue(getState, getState().query.keys[i])
  }
  finalValue += potentialKeywords[potentialKeywords.length-1]
  return finalValue
}

export function openLinkedIn() {
  return function (dispatch, getState) {
    dispatch(openLinkedInObject(getQueryValue(getState)))
  }
}

export function prepareToCopy() {
  return function (dispatch, getState) {
    dispatch(prepareToCopyObject(getQueryValue(getState)))
  }
}

export function getCurrentUser() {
  return function (dispatch) {
    return axios.get('/current_user')
      .then(function (response) {
        dispatch({type: ADD_CURRENT_USER, user: response.data})
      })
  }
}

export function logout() {
  return function (dispatch) {
    return axios.delete('/logout')
      .then(function (response) {
        dispatch({type: REMOVE_CURRENT_USER})
      })
  }
}
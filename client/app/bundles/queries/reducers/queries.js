import {
  RECEIVE_QUERY,
  RECEIVE_QUERIES,
  OPEN_LINKEDIN,
  COPY_QUERY,
  REQUEST_QUERIES,
  DELETE_QUERY
} from '../constants/ActionTypes'

const queries = (state = {
                   items: [],
                   isFetching: false,
                   isInvalidate: true,
                   lastUpdated: undefined
                 }, action) => {
  let index
  switch (action.type) {
    case RECEIVE_QUERY:
      index = state.items.findIndex(q => q.id === action.query.id)
      return (index === -1) ?
        Object.assign({}, state, { items: [...state.items, action.query] }) :
        Object.assign({}, state, {
        items: [
          ...state.items.slice(0, index),
          action.query,
          ...state.items.slice(index + 1, state.items.length)
        ]
      })
    case REQUEST_QUERIES:
      return Object.assign({}, state, { isFetching: true, isInvalidate: false })
    case RECEIVE_QUERIES:
      return Object.assign({}, state, {
        items: action.queries,
        isFetching: false,
        isInvalidate: false,
        lastUpdated: action.receiveAt
      })
    case DELETE_QUERY:
      index = state.items.findIndex(q => q.id === action.id)
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1, state.items.length)
        ] })
    case OPEN_LINKEDIN:
      let url = 'https://www.linkedin.com/search/results/index/?keywords=' +
        encodeURIComponent(action.url) +
        '&origin=GLOBAL_SEARCH_HEADER';

      let win = window.open(url, '_blank');
      win.focus();
      return state
    case COPY_QUERY:
      document.querySelector("#queryBuilder").select();
      document.execCommand('copy');
      return state
    default:
      return state
  }
}

export default queries
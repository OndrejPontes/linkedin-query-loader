import {
  ADD_QUERY,
  OPEN_LINKEDIN,
  COPY_QUERY
} from '../constants/ActionTypes'

const queries = (state = [], action) => {
  switch (action.type) {
    case ADD_QUERY:
      console.log('Adding query')
      console.log(action.query)
      return [
        ...state,
        action.query
      ]
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
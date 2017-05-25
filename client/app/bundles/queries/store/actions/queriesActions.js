export const ADD_QUERY = "ADD_QUERY"
export const REMOVE_QUERY = "REMOVE_QUERY"
export const UPDATE_QUERY = "UPDATE_QUERY"

export const addQuery = query => ({
  type: ADD_QUERY,
  query,
})

export const removeQuery = index => ({
  type: REMOVE_QUERY,
  index,
})

export const updateQuery = (index, query) => ({
  type: REMOVE_QUERY,
  index,
  query,
})

export function createQuery(query) {
  return function (dispatch) {
    return axios.post('/queries', query)
      .then(function (response) {
        dispatch(addQuery(response.data))
      })
  }
}
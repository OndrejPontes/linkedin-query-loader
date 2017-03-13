import actionTypes from '../constants/helloWorldConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name,
  };
}

export function addQuery(query) {
  return {
    type: actionTypes.ADD_QUERY,
    query,
  };
}

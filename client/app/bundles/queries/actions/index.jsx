import {
  ADD_KEYWORD,
  ADD_QUERY,
  ADD_PREDICATE,
  ADD_TO_QUERY_BUILDER,
  OPEN_LINKEDIN,
  COPY_QUERY,
} from '../constants/ActionTypes'

export const addPredicate = (predicate) => ({
  type: ADD_PREDICATE,
  predicate
});

export const addQuery = (query) => ({
  type: ADD_QUERY,
  query: query
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
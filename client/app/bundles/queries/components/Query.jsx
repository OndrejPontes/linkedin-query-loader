import React from 'react';
import { connect } from 'react-redux'
import PredicateButton from '../containers/PredicateButton'
import QueryBuilder from '../containers/QueryBuilder'
import QueryList from '../containers/QueryList'
import CreateQueryModal from '../containers/CreateQueryModal'

let Query = () => (
  <div className="container">
    <PredicateButton predicate="AND">AND</PredicateButton>
    <PredicateButton predicate="OR">OR</PredicateButton>
    <PredicateButton predicate="NOT">NOT</PredicateButton>
    <PredicateButton predicate="(">(</PredicateButton>
    <PredicateButton predicate=")">)</PredicateButton>
    <QueryBuilder />
    <QueryList />
    <CreateQueryModal />
  </div>
);

Query = connect()(Query);

export default Query

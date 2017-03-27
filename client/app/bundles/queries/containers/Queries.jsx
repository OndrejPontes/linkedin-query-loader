import React, { PropTypes } from 'react';
import Query from '../components/Query';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as siteActionCreators from '../actions';

// function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  // return { queriesStore: state.$$queriesStore };
// }

// Simple example of a React "smart" component
const Queries = () => (
  // const { dispatch, queriesStore } = props;
  // const actions = bindActionCreators(siteActionCreators, dispatch);
  // const { addQuery } = actions;
  // const queries = queriesStore.get('$$queries');

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
  // return (
    <div>
      <Query  />
    </div>
  // );
);

// Queries.propTypes = {
//   dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  // queriesStore: PropTypes.instanceOf(Immutable.Map).isRequired,
// };

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default Queries;

import React, { PropTypes } from 'react';
import Keyword from '../components/Keyword';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as siteActionCreators from '../actions/helloWorldActionCreators';

function select(state) {
  return { queriesStore: state.$$queriesStore };
}

const Keywords = (props) => {
  const { dispatch, queriesStore } = props;
  const actions = bindActionCreators(siteActionCreators, dispatch);
  const { addQuery } = actions;
  const queries = queriesStore.get('$$queries');

  return (
    <h1>
      <Keyword {...{ addQuery, queries }} />
    </h1>
  );
};

Keywords.propTypes = {
  dispatch: PropTypes.func.isRequired,
  queriesStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default connect(select)(Keywords);
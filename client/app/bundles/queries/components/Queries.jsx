import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import Immutable from 'immutable';



function select(state) {
  return {queriesStore: state.$$queriesStore};
}

const Queries = (props) => {

  const { dispatch, queriesStore } = props;
  const { queries } = queriesStore.get('$$queries');

  const queryButtons = [];

  queries.forEach(function (query) {
    queryButtons.push(<MyButton value={ query.get('name') }/>)
  });

  return (
    <div>
      { queryButtons }
    </div>
  )
};

Queries.propTypes = {
  dispatch: PropTypes.func.isRequired,
  queriesStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default connect(select)(Queries)
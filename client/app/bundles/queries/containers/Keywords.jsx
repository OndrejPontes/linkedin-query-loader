import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Immutable from "immutable";

function select(state) {
  return { queriesStore: state.$$queriesStore };
}

const Keywords = () => {
  return (
    <h1>
      Keywords
    </h1>
  );
};

Keywords.propTypes = {
  dispatch: PropTypes.func.isRequired,
  queriesStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default connect(select)(Keywords);

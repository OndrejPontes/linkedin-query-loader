import { connect } from 'react-redux'
import { addKeyword, addToQueryBuilder } from '../actions'
import React, { PropTypes } from 'react'
import axios from 'axios'

const mapStateToProps = (state) => ({
  state: state,
  queries: state.queries.items
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (keyword) => {
    dispatch(addKeyword(keyword))
    dispatch(addToQueryBuilder(keyword))
  }
});

const List = ({queries, onClick, state}) => {

  return (
    <div className="queries">
      { queries.map(query =>
      <div key={query.name} >
        <button type="button" className="btn" onClick={() => onClick(query.name)}>
          { query.name }
        </button>
      </div>
      )}
    </div>
  )
}

List.propsType = {
  queries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};


const QueryList = connect(mapStateToProps, mapDispatchToProps)(List)

export default QueryList
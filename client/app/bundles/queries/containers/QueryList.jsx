import { connect } from 'react-redux'
import { addKeyword, addToQueryBuilder } from '../actions'
import React, { PropTypes } from 'react'

const mapStateToProps = (state) => ({
  state: state,
  queries: state.queries
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (keyword) => {
    dispatch(addKeyword(keyword))
    dispatch(addToQueryBuilder(keyword))
  }
});

const List = ({queries, onClick, state}) => {

  console.log('STATE')
  console.log(state)

  return (<div className="queries">
      { queries.map(query =>
        <button key={query.name} onClick={() => onClick(query.name)}>
          { query.name }
        </button>
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
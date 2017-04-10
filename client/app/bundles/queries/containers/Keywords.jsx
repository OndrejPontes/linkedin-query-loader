import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateQuery, deleteQuery, toggleUpdateQuery } from '../actions'
import * as React from 'react'

const mapStateToProps = (state) => ({
  queries: state.queries.items
});

const mapDispatchToProps = {
  updateQuery,
  deleteQuery,
  toggleUpdateQuery
};

const QueryList = ({queries, updateQuery, deleteQuery, toggleUpdateQuery}) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th style={{width: "80%"}}>Expression</th>
          <th style={{width: "20%"}}>Action</th>
        </tr>
        </thead>
        <tbody>
        { queries.map(q =>
          <tr key={q.name}>
            <td>
              <h2>{ q.name }</h2>
            </td>
            <td>
              <p>{ q.value }</p>
            </td>
            <td>
              <button type="button" className="btn btn-lg ">
                <span className="glyphicon glyphicon-pencil"/>&nbsp;
              </button>
              <button type="button" className="btn btn-lg pull-right">
                <span className="glyphicon glyphicon-minus"/>&nbsp;
              </button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

QueryList.propsType = {
  queries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    })
  ).isRequired,
  updateQuery: PropTypes.func.isRequired,
  deleteQuery: PropTypes.func.isRequired,
  toggleUpdateQuery: PropTypes.func.isRequired
}


const Keywords = connect(mapStateToProps, mapDispatchToProps)(QueryList);

export default Keywords;

import React, { PropTypes } from 'react'

const Input = ({query, queryBuilder, toggleCreateModal, openLinkedIn, copyQuery, queryBuilderOnChange, prepareToCopy}) => (
  <div className="queryBuilder">
    <div className="input-group">
      <input type="text" onChange={queryBuilderOnChange} className="form-control" id="queryBuilder" value={ queryBuilder }/>
      <div className="input-group-btn">
        <button type="button" className="btn" onClick={ e => {
          e.preventDefault();
          toggleCreateModal();
        }}>
          Create
        </button>
        <button type="button" className="btn" onClick={ e => {
          e.preventDefault();
          openLinkedIn(queryBuilder);
        }}>
          LinkedIn
        </button>
        <button type="button" className="btn" onClick={ e => {
          prepareToCopy()
          copyQuery(queryBuilder);
        }}>
          Copy
        </button>
      </div>
    </div>
  </div>
);

Input.PropTypes = {
  query: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }),
  queryBuilder: PropTypes.string.isRequired,
  addQuery: PropTypes.func.isRequired,
  openLinkedIn: PropTypes.func.isRequired,
  copyQuery: PropTypes.func.isRequired
};

export default Input;
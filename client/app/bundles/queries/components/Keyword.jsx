import React, {PropTypes} from 'react'

export default class Keyword extends React.Component {
  static propTypes = {
    addQuery: PropTypes.func.isRequired,
    queries: PropTypes.object.isRequired,
  };


  render() {
    const {queries} = this.props;
    const queryList = [];

    queries.forEach(function (query) {
      queryList.push(
        <li className="list-group-item" key={ query.get('name') }>
          { query.get('name') }
          { query.get('value') }
          <button type="button" className="btn btn-lg pull-right">
            <span className="glyphicon glyphicon-pencil"/>&nbsp;
          </button>
          <button type="button" className="btn btn-lg pull-right">
            <span className="glyphicon glyphicon-minus"/>&nbsp;
          </button>
        </li>
      )
    });

    return (
      <div className="container">
        <div className="row">
          <button type="button" className="btn btn-lg pull-right">
            <span className="glyphicon glyphicon-plus"/>&nbsp;
          </button>
        </div>
        <ul className="list-group">
          { queryList }
        </ul>
      </div>
    )
  }
}
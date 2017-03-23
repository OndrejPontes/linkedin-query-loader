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
          <span style={{ marginRight:"100px"}}>{ query.get('name') }</span>
          description
          <button type="button" className="btn btn-lg pull-right" style={{ margin:"0px 5px", padding:"10px 13px 6px 15px"}}>
            <span className="glyphicon glyphicon-pencil"/>&nbsp;
          </button>
          <button type="button" className="btn btn-lg pull-right" style={{ padding:"10px 13px 6px 15px"}}>
            <span className="glyphicon glyphicon-minus"/>&nbsp;
          </button>
        </li>
      )
    });

    return (
      <div className="container">
        <ul className="list-group">
          { queryList }
        </ul>
      </div>
    )
  }
}
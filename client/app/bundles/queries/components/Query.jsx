import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class Query extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    addQuery: PropTypes.func.isRequired,
    queries: PropTypes.object.isRequired,
  };

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    const { queries } = this.props;

    var tableQueries = [];

    this.props.queries.forEach(function (query) {
      tableQueries.push(
        <tr>
          <td>{ query.name }</td>
          <td>{ query.value }</td>
          <td>{ query.keys }</td>
        </tr>
      )
    });

    console.log(this.props.queries);

    return (
      <div className="container">
        <h3>
          Testing queries
        </h3>
        <hr />
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Keys</th>
          </tr>
          </thead>
          <tbody>
          { tableQueries }
          </tbody>
        </table>
      </div>
    );
  }
}

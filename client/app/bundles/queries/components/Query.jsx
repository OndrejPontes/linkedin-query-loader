import React, {PropTypes} from 'react';

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
    const {queries} = this.props;

    const queryButtons = [];
    const buttonsGrid = []

    queries.forEach(function (query) {
      queryButtons.push(
        <button type="button" className="btn col-sm-4">{ query.get('name')}</button>
      )
    });

    for (let i = 0; i < Math.ceil(queryButtons.length / 3); i++) {
      buttonsGrid.push(
        <div className="row">
          <div>{ queryButtons[i] }</div>
          <div>{ queryButtons[i + 1] }</div>
          <div>{ queryButtons[i + 2] }</div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="row">
          <button type="button" className="btn col-sm-2">AND</button>
          <button type="button" className="btn col-sm-2">OR</button>
          <button type="button" className="btn col-sm-2">NOT</button>
          <button type="button" className="btn col-sm-2">(</button>
          <button type="button" className="btn col-sm-2">)</button>
        </div>
        <div className="row">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Create query"/>
            {/*<button type="button" className="btn input-group-btn">LinkedIn</button>*/}
            {/*<button type="button" className="btn input-group-btn">Copy</button>*/}
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                 <button className="btn btn-default" type="button">Go!</button>
                </span>
              </div>
            </div>
            { buttonsGrid }
          </div>
        </div>
      </div>
    );
  }
}

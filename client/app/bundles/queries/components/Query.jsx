import React, {PropTypes,} from 'react';

// import css from './Query.scss'

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
        <button type="button" className="btn" style={{margin: "0px 5px 0px 5px", width: "360px"}}>
          { query.get('name')}
        </button>
      )
    });

    for (let i = 0; i < Math.ceil(queryButtons.length / 3); i++) {
      buttonsGrid.push(
        <div className="row" style={{padding: "0px 0px 10px 15px"}} key={i}>
          { queryButtons[i] }
          { queryButtons[i + 1] }
          { queryButtons[i + 2] }
        </div>
      )
    }

    return (
      <div className="container">
        <div className="row" style={{paddingBottom: "20px"}}>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 13px"}}>AND</button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 0px"}}>OR</button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 0px"}}>NOT</button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 0px"}}>(</button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 10px 0px 0px"}}>)</button>
        </div>
        <div className="row" style={{padding: "0px 17px 20px 14px"}}>
          <div className="input-group">
            <input type="text" className="form-control"/>
            <div className="input-group-btn">
              <button type="button" className="btn">LinkedIn</button>
              <button type="button" className="btn">Copy</button>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row" style={{padding: "10px 20px 10px 20px"}}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                 <button className="btn btn-default" type="button">Searc</button>
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

import React, {PropTypes,} from 'react';


// Simple example of a React "dumb" component
export default class Query extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    addQuery: PropTypes.func.isRequired,
    queries: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {queryBuilder: ''};

    this.insertPredicateIntoQueryBuilder = this.insertPredicateIntoQueryBuilder.bind(this)
    this.insertQueryIntoQueryBuilder = this.insertQueryIntoQueryBuilder.bind(this)
    this.searchOnLinkedIn = this.searchOnLinkedIn.bind(this)
  }

  insertPredicateIntoQueryBuilder(e) {
    let val = this.state.queryBuilder + ' ' + e.target.value;
    this.setState({queryBuilder: val})
  }

  searchOnLinkedIn() {
    // https://www.linkedin.com/search/results/index/?keywords=%20(.net%20OR%20dotnet%20OR%20ASP%20NET%20OR%20C%23%20OR%20C%2B%2B%2FCLI)&origin=GLOBAL_SEARCH_HEADER
    let url = 'https://www.linkedin.com/search/results/index/?keywords=' +
      encodeURIComponent(this.state.queryBuilder) +
      '&origin=GLOBAL_SEARCH_HEADER';

    let win = window.open(url, '_blank');
    win.focus();
  }

  copyQuery() {
    document.querySelector("#queryBuilder").select();
    document.execCommand('copy');
  }

  insertQueryIntoQueryBuilder(query) {
    let value = '';
    if (query.get('keys').size > 0) {
      query.get('value').split(/{|}/).forEach((part) => {
        let n = Number(part);
        if (!isNaN(n)) {
          value += query.get('keys').get(n)
        } else {
          value += part
        }
      })
    } else {
      value = query.get('value');
    }
    let val = this.state.queryBuilder + ' ' + value;
    this.setState({queryBuilder: val})
  }

  render() {
    const {queries} = this.props;

    const queryButtons = [];
    const buttonsGrid = [];

    queries.forEach(function (query) {
      queryButtons.push(
        <button type="button" className="btn" style={{margin: "0px 5px 0px 5px", width: "360px"}}
                onClick={() => this.insertQueryIntoQueryBuilder(query)}>
          { query.get('name')}
        </button>
      )
    }.bind(this));

    for (let i = 0; i < Math.ceil(queryButtons.length / 3); i++) {
      buttonsGrid.push(
        <div className="row special_red" style={{padding: "0px 0px 10px 15px"}} key={i}>
          { queryButtons[i] }
          { queryButtons[i + 1] }
          { queryButtons[i + 2] }
        </div>
      )
    }

    return (
      <div className="container">
        <div className="row" style={{paddingBottom: "20px"}}>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 13px"}}
                  onClick={ this.insertPredicateIntoQueryBuilder } value="AND">AND
          </button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 0px"}}
                  onClick={ this.insertPredicateIntoQueryBuilder } value="OR">OR
          </button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 0px"}}
                  onClick={ this.insertPredicateIntoQueryBuilder } value="NOT">NOT
          </button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 35px 0px 0px"}}
                  onClick={ this.insertPredicateIntoQueryBuilder } value="(">(
          </button>
          <button type="button" className="btn" style={{width: "200px", margin: "0px 10px 0px 0px"}}
                  onClick={ this.insertPredicateIntoQueryBuilder } value=")">)
          </button>
        </div>
        <div className="row" style={{padding: "0px 17px 20px 14px"}}>
          <div className="input-group">
            <input type="text" className="form-control" id="queryBuilder" value={this.state.queryBuilder}/>
            <div className="input-group-btn">
              <button type="button" className="btn" onClick={this.searchOnLinkedIn}>LinkedIn</button>
              <button type="button" className="btn" onClick={this.copyQuery}>Copy</button>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row" style={{padding: "10px 20px 10px 20px"}}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                 <button className="btn btn-default" type="button">Search</button>
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

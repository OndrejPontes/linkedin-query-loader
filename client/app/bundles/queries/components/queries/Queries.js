/**
 * Constant queries
 * Query builder
 * Complex queries
 * Elementary queries
 */
import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"

import { addQuery } from "../../store/actions/queriesActions"
import {
  constQueriesSelector,
  elementaryQueriesSelector,
  complexQueriesSelector
} from "../../store/selectors/queriesSelectors"

import QueriesList from "./queriesList/QueriesList"
import QueryBuilder from "./queryBuilder/QueryBuilder"

class Queries extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      builderQueries: List(),
    }
    
    this.addQueryToBuilder = this.addQueryToBuilder.bind(this)
    this.createBuilderQuery = this.createBuilderQuery.bind(this)
    this.removeQueryFromBuilder = this.removeQueryFromBuilder.bind(this)
  }
	
	/**
   * Creates query and push it to the query builder if needed
	 */
	createBuilderQuery(query, add) {
    this.props.dispatch(addQuery(query))
    
    if (add) {
      this.addQueryToBuilder(query)
    } else {
      this.setState({
	      builderQueries: List(),
      })
    }
  }
  
  addQueryToBuilder(query) {
    this.setState({
      builderQueries: this.state.builderQueries.push(query),
    })
  }
  
  removeQueryFromBuilder(index) {
	  this.setState({
		  builderQueries: this.state.builderQueries.remove(index),
	  })
  }
  
  render() {
    return (
      <div>
        <QueriesList
          className="const-queries"
          buttonClassName="btn btn-primary"
          queries={this.props.constQueries}
          selectQuery={this.addQueryToBuilder}
        />
        <QueryBuilder
          queries={this.state.builderQueries}
          createQuery={this.createBuilderQuery}
          removeQuery={this.removeQueryFromBuilder}
        />
        <QueriesList
          className="elementary-queries"
          buttonClassName="btn btn-primary"
          queries={this.props.elementaryQueries}
          selectQuery={this.addQueryToBuilder}
          showSearch
        />
        <QueriesList
          className="complex-queries"
          buttonClassName="btn btn-primary"
          queries={this.props.complexQueries}
          selectQuery={this.addQueryToBuilder}
          showSearch
        />
      </div>
    )
  }
}

export default connect(state => ({
  constQueries: constQueriesSelector(state),
  elementaryQueries: elementaryQueriesSelector(state),
  complexQueries: complexQueriesSelector(state),
}))(Queries)
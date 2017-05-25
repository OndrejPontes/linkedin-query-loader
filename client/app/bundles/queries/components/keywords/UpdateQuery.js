import React, { Component } from 'react'
import { List } from 'immutable'

import Query, { QUERY_TYPES } from '../../containers/Query'

import BuilderList from '../queries/queryBuilder/BuilderList'

const createQuery = (queries, term) =>
  new Query({
      value: term,
      items: queries && queries.size > 0 ? queries : List(),
      type: queries && queries.size > 0 ? QUERY_TYPES.COMPLEX : QUERY_TYPES.ELEMENTARY,
    }
  )

const saveQuery = query => {
  if (query.items.size > 0) {
    if (query.value.length > 0) {
      const newQuery = new Query({
        name: query.value,
        value: query.value,
        type: QUERY_TYPES.ELEMENTARY,
      })
      return query.set("value", "").set("items", query.items.push(newQuery))
    } else {
      return query
    }
  }
  return query
}

class UpdateQuery extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: this.props.query,
      items: this.query.items,
    }

    this.changeValue = this.changeValue.bind(this)
    this.changeName = this.changeName.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({
      query: createQuery(props.queries, this.state.query.value),
    })
  }

  changeValue(event) {
    this.setState({
      query: this.state.query.set("value", event.target.value),
    })
  }

  changeName(event) {
    this.setState({
      query: this.state.query.set("name", event.target.value),
    })
  }

  keyPress(event) {
    if (event.key === "Enter") {
      const {query} = this.state
      const newQuery = new Query({
        name: query.value,
        value: query.value,
        type: QUERY_TYPES.ELEMENTARY,
      })

      this.setState({
        query: this.state.query.set("value", ""),
      }, () => {
        this.props.createQuery(newQuery, true)
      })
    }
  }

  render() {
    const {query} = this.state

    return (
      <div style={{border: "1px solid black"}}>
        <BuilderList queries={query.items} handleClick={this.props.removeQuery}/>
        <input value={query.value} onChange={this.changeValue} onKeyPress={this.keyPress}/>
      </div>
    )
  }
}

export default UpdateQuery
import React, { Component } from "react"
import { connect } from "react-redux"
import { List } from "immutable"
import Chips, { Chip } from "react-chips"

import Query, { QUERY_TYPES } from "../../../containers/Query"
import { nonConstSelector } from "../../../store/selectors/queriesSelectors"

import BuilderList from "./BuilderList"
import Modal from "../../shared/Modal"
import CustomChip from "./CustomChip"

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

class QueryBuilder extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: createQuery(this.props.queries, ""),
      saving: false,
      chips: List(),
    }

    this.changeValue = this.changeValue.bind(this)
    this.changeName = this.changeName.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.saveQuery = this.saveQuery.bind(this)
    this.createQueryFromString = this.createQueryFromString.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(newChips) {
    let chips = this.state.chips
    let oldChips = chips.map(query => query.get('name')).toArray()

    if (newChips.length > oldChips.length) {
      chips = this.state.chips.push(this.createQueryFromString(newChips[newChips.length-1]))
      this.setState({ chips });
    }
    if (newChips.length < oldChips.length) {
      for(let i = 0; i < oldChips.length; i++) {
        if(oldChips[i] !== newChips[i]) {
          chips = chips.remove(i)
          break
        }
      }
      this.setState({ chips });
    }
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

  createQueryFromString(name) {
    const newQuery = new Query({
      name: name,
      value: name,
      type: QUERY_TYPES.ELEMENTARY,
    })

    this.props.createQuery(newQuery, true)

    return newQuery
  }

  openModal() {
    this.setState({
      saving: true,
    })
  }

  closeModal() {
    this.setState({
      saving: false,
    })
  }

  saveQuery() {
    this.setState({
      saving: false,
    }, () => {
      this.props.createQuery(saveQuery(this.state.query))
    })
  }

  render() {
    const {query, saving} = this.state
    const {queries, data} = this.props

    return (
      <div className="queryBuilder">
        <Chips
          placeholder="Type a name of existing query or crete new one"
          value={this.state.chips.map(query => query.get('name')).toArray()}
          onChange={this.onChange}
          suggestions={data.map(query => query.get('name')).toArray()}
          fromSuggestionsOnly={false}
          uniqueChips={false}
          createChipKeys={[13, 32]}
          highlightFirstSuggestion={false}
        />


        {/*<BuilderList queries={query.items} handleClick={this.props.removeQuery}/>*/}
        {/*<input value={query.value} onChange={this.changeValue} onKeyPress={this.keyPress}/>*/}
        <button type="button" className="btn btn-outline-primary" onClick={this.openModal}>Create</button>
        <button type="button" className="btn btn-outline-primary">Copy</button>
        <button type="button" className="btn btn-outline-primary">LinkedIn</button>
        {/*<button onClick={this.openModal}>Save</button>*/}

        {saving && <Modal closeModal={this.closeModal} header="Header">
          <input value={query.name} onChange={this.changeName} name="Name" placeholder="Name"/>
          <button onClick={this.saveQuery}>Save</button>
        </Modal>}
      </div>
    )
  }
}

export default connect(state => ({data: nonConstSelector(state)}))(QueryBuilder)
import React, { Component } from "react"
import { connect } from "react-redux"
import { nonConstSelector } from "../../store/selectors/queriesSelectors"
import Chips from "react-chips"

import { updateQuery } from "../../store/actions/queriesActions"

import Keyword from './Keyword'
import Modal from '../shared/Modal'

class Keywords extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      modalQuery: undefined,
      search: "",
      keywords: this.props.keywords,
      modalName: "",
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(props) {
    if (props.keywords !== this.state.keywords) {
      this.setState({keywords: props.keywords})
    }
  }

  openModal(modalQuery) {
    this.setState({
      showModal: true,
      modalQuery,
      modalName: modalQuery.get('name'),
    })
  }

  closeModal() {
    this.setState({
      showModal: false,
      modalQuery: undefined,
      modalName: "",
    })
  }

  updateSearch(event) {
    const search = event.target.value
    const searchTerm = search.toLowerCase()
    const keywords = searchTerm.length > 0
      ? this.props.keywords.filter(keyword => keyword.name.toLowerCase().includes(searchTerm))
      : this.props.keywords
    this.setState({search, keywords})
  }

  onChange(newItems) {
    let oldItems = this.state.modalQuery.get('items').map(query => query.get('name')).toArray()
    if (newItems.length > oldItems.length) {
      this.setState({
        modalQuery: this.state.modalQuery.addItem(
          this.props.data.find(query => query.get('name') === newItems[newItems.length - 1])
        )
      })
    }
    if (newItems.length < oldItems.length) {
      for (let i = 0; i < oldItems.length; i++) {
        if (oldItems[i] !== newItems[i]) {
          this.setState({
            modalQuery: this.state.modalQuery.removeItem(i)
          })
          break
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <div>Name</div>
          <div>Value</div>
          <div>
            <input type="text" className="form-control" value={this.state.search} onChange={this.updateSearch}
                   placeholder="Filter"/>
          </div>
        </div>
        <div className="keywords">
          <div>
            {
              this.state.keywords.map((query, index) =>
                <Keyword key={index} query={query} openModal={this.openModal}/>
              )
            }
            {
              this.state.showModal &&
              <Modal closeModal={this.closeModal} query={this.state.modalQuery} header="Update query">
                <div>
                  Name
                  <input value={this.state.modalQuery.get('name')}
                         onChange={e => this.setState({modalQuery: this.state.modalQuery.changeName(e.target.value)})}/>

                </div>
                <div>
                  Value
                  <Chips
                    placeholder="Type a name of existing query or crete new one"
                    value={this.state.modalQuery.items.map(query => query.get('name')).toArray()}
                    onChange={this.onChange}
                    suggestions={this.props.data.map(query => query.get('name')).toArray()}
                    fromSuggestionsOnly={true}
                    uniqueChips={false}
                    highlightFirstSuggestion={true}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" onClick={() => {
                    this.props.dispatch(updateQuery(this.state.modalQuery))
                    this.closeModal()
                  }} className="btn btn-primary">Save</button>
                  <button type="button" onClick={this.closeModal} className="btn btn-secondary">Discard changes</button>
                </div>
              </Modal>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  keywords: nonConstSelector(state),
  data: state.queries,
}))(Keywords)
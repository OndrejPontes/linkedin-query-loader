import React, { Component } from "react"
import { connect } from 'react-redux'
import { nonConstSelector } from '../../store/selectors/queriesSelectors'

import Keyword from './Keyword'
import UpdateModal from './UpdateModal'

class Keywords extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      modalQuery: null,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(modalQuery) {
    this.setState({
      showModal: true,
      modalQuery,
    })
  }

  closeModal() {
    this.setState({
      showModal: false,
      modalQuery: null,
    })
  }

  render() {
    return (
      <div>
        {
          this.props.keywords.map((query, index) =>
            <Keyword key={index} query={query} openModal={this.openModal}/>
          )
        }
        {this.state.showModal && <UpdateModal closeModal={this.closeModal} query={this.state.modalQuery}/>}
      </div>
    )
  }
}

export default connect(state => ({
  keywords: nonConstSelector(state)
}))(Keywords)
import React, { Component }  from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  //TODO add delete function
};

class Keyword extends Component {
  constructor(props) {
    super(props)

    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  handleOpenModal() {
    this.props.openModal(this.props.query)
  }

  render() {
    return (
      <div>
        { this.props.query.name } ||
        { this.props.query.getFullValue() } ||
        <button type="button" className="btn btn-lg" onClick={ this.handleOpenModal }>
          <span className="glyphicon glyphicon-pencil"/>&nbsp;
        </button> ||
        <button type="button" className="btn btn-lg pull-right">
          <span className="glyphicon glyphicon-minus"/>&nbsp;
        </button>
      </div>
    )
  }
}

export default connect(undefined, mapDispatchToProps)(Keyword)


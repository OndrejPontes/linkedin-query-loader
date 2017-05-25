import React, { Component } from 'react'
import Modal from '../shared/Modal'
import UpdateQuery from './UpdateQuery'

class UpdateModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      queryName: props.query.name,
      query: props.query,
    }

    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(event) {
    this.setState({
      queryName: event.target.value,
    })
  }

  render() {
    return (
      <Modal header={"Updating query: " + this.state.query.name } closeModal={this.props.closeModal}>
        <div className="modal-body">
          <label>Name: </label>
          <input value={this.state.queryName} onChange={this.changeHandler}/>
          <UpdateQuery query={this.state.query}/>
          <p>TODO use logic from query builder</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Save changes</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal"
                  onClick={this.props.closeModal}>Close</button>
        </div>
      </Modal>
    )
  }
}

export default UpdateModal
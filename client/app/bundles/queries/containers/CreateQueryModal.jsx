import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createQuery, toggleModal } from '../actions'
import { Modal, Button, FormGroup, FormControl, Form, ControlLabel } from 'react-bootstrap'
import * as React from 'react'

const mapStateToProps = (state) => ({
  isModalVisible: state.modals.addQuery,
  query: state.query
});

const mapDispatchToProps = {
  createQuery: createQuery,
  toggleModal: toggleModal
};

const ModalAdd = ({isModalVisible, query, createQuery, toggleModal}) => {

  function create() {
    createQuery(Object.assign({}, query, { name: document.getElementById('queryName').value }))
    toggleModal()
  }

  return (
    <Modal show={isModalVisible} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add name of new query</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form inline>
          <FormGroup controlId="queryName">
            <ControlLabel>Name</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Enter name of query" />
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleModal}>Close</Button>
        <Button bsStyle="primary" onClick={create}>Create</Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalAdd.propsType = {
  isModalVisible: PropTypes.bool.isRequired,
  query: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }),
  createQuery: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const CreateQueryModal = connect(mapStateToProps, mapDispatchToProps)(ModalAdd);

export default CreateQueryModal;
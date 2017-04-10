import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleCreateModal, clearQueryBuilder, validateAndCreateQuery } from '../actions'
import { Modal, Button, FormGroup, FormControl, Form, ControlLabel } from 'react-bootstrap'
import * as React from 'react'

const mapStateToProps = (state) => ({
  isModalVisible: state.modals.addQuery
});

const mapDispatchToProps = {
  toggleCreateModal,
  clearQueryBuilder,
  validateQuery: validateAndCreateQuery
};

const ModalAdd = ({isModalVisible, toggleCreateModal, clearQueryBuilder, validateQuery}) => {

  function create() {
    validateQuery(document.getElementById('queryName').value)
    clearQueryBuilder()
    toggleCreateModal()
  }

  return (
    <Modal show={isModalVisible} onHide={toggleCreateModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add name of new query</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form inline>
          <FormGroup controlId="queryName">
            <ControlLabel>Name</ControlLabel>
            {' '}
            <FormControl onKeyPress={e => {
              if(e.charCode===13){
                e.preventDefault()
                create()
              }
            }} type="text" placeholder="Enter name of query" />
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleCreateModal}>Close</Button>
        <Button bsStyle="primary" onClick={create}>Create</Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalAdd.propsType = {
  isModalVisible: PropTypes.bool.isRequired,
  validateQuery: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const CreateQueryModal = connect(mapStateToProps, mapDispatchToProps)(ModalAdd);

export default CreateQueryModal;
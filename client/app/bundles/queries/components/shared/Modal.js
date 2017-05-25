import React from 'react'

const UpdateModal = props => (
  <div className="modal fade" style={{opacity: 1, display: "block", backgroundColor: "rgba(0,0,0,.3)"}}
       onClick={props.closeModal}>
    <div className="modal-dialog" role="document" style={{marginTop: "5%"}} onClick={e => e.stopPropagation()}>
      <div className="modal-content">
        {
          props.header &&
          <div className="modal-header">
            <h5 className="modal-title">{props.header}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }
        { props.children }
      </div>
    </div>
  </div>
)

export default UpdateModal
import React, {PropTypes} from 'react'

const Button = ({children, onClick}) => {
  return (
    <div className="predicateButton">
    <button type="button"
            className="btn"
            onClick={e => {
              e.preventDefault();
              onClick();
            }}
    >
      { children }
    </button>
    </div>
  )
};

Button.propsType = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;


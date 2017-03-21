import React from 'react'

export default class MyButton extends React.Component {
  render() {
    return (
      <div className="predicateBlock">
        <button
          className="predicateButton mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          { this.props.value }
        </button>
      </div>
    )
  }
}
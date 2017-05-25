import React, { Component } from 'react';

class CustomChip extends Component {
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
        <div onClick={() => this.props.onRemove(this.props.index)}>&times;</div>
      </div>
    );
  }
}

export default CustomChip
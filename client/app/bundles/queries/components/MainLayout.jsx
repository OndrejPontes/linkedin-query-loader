import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> HEADER </h1>
        { this.props.children }
        <h1> FOOTER </h1>
      </div>
    );
  }
}

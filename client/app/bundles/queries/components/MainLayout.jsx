import React from 'react';
import Header from './oHeader'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: '70px' }}>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

import React, { Component } from "react"
import { connect } from "react-redux"

import NotAvailable from "../NotAvailable"

class Allow extends Component {
  render() {
    console.log(this.props.children)
    return (
      this.props.user.is_admin ? this.props.children : <NotAvailable/>
    )
  }
}
export default connect(state => ({user: state.user}))(Allow)
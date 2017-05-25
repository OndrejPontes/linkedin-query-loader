import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand">Absb</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" activeClassName="active">Queries</Link>
              </li>
              <li>
                <Link to="/keywords" activeClassName="active">Keywords</Link>
              </li>
            </ul>
            {(this.props.user.name.length < 1) ?
              <button type="button" className="btn btn-default navbar-btn navbar-right"
                    onClick={() => window.location.replace("auth/linkedin")}>Sign in</button>
            :
              <button type="button" className="btn btn-default navbar-btn navbar-right">Logout</button>
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(state => ({
  user: state.user
}))(Header)
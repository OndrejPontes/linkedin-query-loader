import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { login, logout } from '../actions'

const config = {
  url: "http://localhost:3000/oauth/authorize",
  client: "d532230c1eefa9dbf89e628e13d594b0514df5bb3b5143156bf4223221be7e87",
  redirect: "http://localhost:3000",
  scope: "",
  type: "code"
}

const Header = ({isLoggedIn, login, logout}) => (
    <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
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
          <button type='button' className="btn btn-default navbar-btn navbar-right"
                  onClick={() => isLoggedIn ? logout() : login()}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
      </div>
    </nav>
  )

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = ({auth}) => ({
  isLoggedIn: auth.isLoggedIn
})

const mapDispatchToProps = {
  login: () => login(config),
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
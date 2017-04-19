import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'


export default class Header extends React.Component {
  render() {
    function logOut() {
      return axios.get('/logout')
        .then(function () {
          console.log('Successful log out.')
        })
    }

    return (
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
              <li>
                <Link to="/auth/twitter" activeClassName="active">Twitter</Link>
              </li>
              <li>
                <Link to="/auth/linkedin" activeClassName="active">LinkedIn</Link>
              </li>
              <li>
                <button onClick={logOut}>Log out</button>
              </li>
            </ul>
            <button type="button" className="btn btn-default navbar-btn navbar-right">Sign in</button>
          </div>
        </div>
      </nav>
    )
  }
}
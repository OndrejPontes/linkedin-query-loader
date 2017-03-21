import React  from 'react'

import PredicateButtons from './PredicateButtons'
import QueryBuilder from './QueryBuilder'
import Queries from './Queries'

export default class Root extends React.Component {
  render() {

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <div className="layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <div className="ribbon"></div>
        <main className="main mdl-layout__content">
          <div className="demo-container mdl-grid">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
            <div className="mdl-cell--8-col mdl-typography--text-center">
            <h1 className="logo">Absb</h1>
            </div>
            <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
            <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
            <div className="content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
              <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div className="mdl-tabs__tab-bar">
                  <a href="#queries" className="mdl-tabs__tab is-active">Queries</a>
                  <a href="#keywords" className="mdl-tabs__tab">Keywords</a>
                </div>

                <div className="mdl-tabs__panel is-active" id="queries">
                  <PredicateButtons />
                  <QueryBuilder />
                  {/*<Queries />*/}
                </div>
                <div className="mdl-tabs__panel" id="keywords">
                  <li>Eddard</li>
                  <li>Catelyn</li>
                  <li>Robb</li>
                  <li>Sansa</li>
                  <li>Brandon</li>
                  <li>Arya</li>
                  <li>Rickon</li>
                  <li>Eddard</li>
                  <li>Catelyn</li>
                  <li>Robb</li>
                  <li>Sansa</li>
                  <li>Brandon</li>
                  <li>Arya</li>
                  <li>Rickon</li>
                  <li>Eddard</li>
                  <li>Catelyn</li>
                  <li>Robb</li>
                  <li>Sansa</li>
                  <li>Brandon</li>
                  <li>Arya</li>
                  <li>Rickon</li>
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
          </div>
        </main>
      </div>
    )
  }
}
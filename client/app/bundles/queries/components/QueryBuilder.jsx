import React from 'react'
import MyButton from './MyButton'

export default class QueryBuilder extends React.Component {
  render() {
    return (
      <div className="query-builder">
        <div className="query-form">
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" id="sample1"/>
              <label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
            </div>
          </form>
        </div>
        <MyButton value="LinkedIn"/>
        <MyButton value="Copy"/>
      </div>
    )
  }
}
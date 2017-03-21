import React from 'react'

import MyButton from './MyButton'

export default class PredicateButtons extends React.Component {
  render() {
    return (
      <div className="predicateButtons">
        <MyButton value="AND" />
        <MyButton value="OR" />
        <MyButton value="NOT" />
        <MyButton value="(" />
        <MyButton value=")" />
      </div>
    )
  }
}
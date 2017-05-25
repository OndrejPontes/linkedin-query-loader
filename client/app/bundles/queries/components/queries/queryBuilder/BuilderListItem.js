import React, { Component } from "react"

class BuilderListItem extends Component {
	
	constructor(props) {
		super(props)
		
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick(e) {
		this.props.handleClick(this.props.index)
	}
	
	render() {
		return (
			<div onClick={this.handleClick}>
				{this.props.query.name}
			</div>
		)
	}
}

export default BuilderListItem
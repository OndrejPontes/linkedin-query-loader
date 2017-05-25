import React from "react"

import BuilderListItem from "./BuilderListItem"

const BuilderList = props => (
	<div className="builderList">
		{props.queries.map((query, index) =>
			<BuilderListItem
				key={index}
				index={index}
				handleClick={props.handleClick}
				query={query}
			/>)
		}
	</div>
)

export default BuilderList
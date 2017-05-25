import React  from "react"

const Search = props => (
	<div>
		<input value={props.search} onChange={props.updateSearch} />
	</div>
)

export default Search
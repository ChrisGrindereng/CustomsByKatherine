import React from 'react'
import ReactDOM from 'react-dom'

const app = function() {

	const Header = React.createClass({
		render: () => {
			return <h1>Customs By Katherine</h1>
		}
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()
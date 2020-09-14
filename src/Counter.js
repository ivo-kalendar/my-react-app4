import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: props.initialCount
		}
	}
	
	render() {
		console.log('Render Counter...')
		return (
			<ThemeContext.Consumer>
				{styleProvider => (
					<div className='App'>
						<span style={styleProvider} className="textMkd">Одземи Едно</span>
				      	<button onClick={() => this.changeCount(this.decrement())}>-</button>
				      	<span> {this.state.count} </span>
				      	<button onClick={() => this.changeCount(this.increment())}>+</button>
				      	<span style={styleProvider} className="textMkd">Додади Едно</span>
					</div>
				)}
			</ThemeContext.Consumer>
		)
	}

	decrement() {
		let num = -1
		if (this.state.count === 0) num = this.state.count
		return num
	}

	increment() {
		let num = 1
		if (this.state.count === 10) num = 0
		return num
	}

	changeCount(amount) {
		this.setState(prevState => {
			return { count: prevState.count + amount }
		})
	}	
}








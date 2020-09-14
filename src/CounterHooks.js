import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

export default function CounterHooks(props) {
	let [ count, setCount ] = useState(props.initialCount)
	const styleProvider = useContext(ThemeContext)
	console.log('Render CounterHooks...')
	return (
		<div className="App">
			<span style={styleProvider} className="textMkd">Одземи Едно</span>
			<button onClick={() => changeCount(decrement())}>-</button>
			<span> {count} </span>
			<button onClick={() => changeCount(increment())}>+</button>
			<span style={styleProvider} className="textMkd">Додади Едно</span>
		</div>
	)

	function decrement() {
		let num = -1
		if (count === 0) num = 0
		return num
	}

	function increment() {
		let num = 1
		if (count === 10) num = 0
		return num	
	}

	function changeCount(amount) {
		setCount(prevCount => prevCount + amount)
	}
}











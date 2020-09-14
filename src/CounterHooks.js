import React, { useState } from 'react'

export default function CounterHooks(props) {
	let [ count, setCount ] = useState(props.initialCount)
	console.log('Render CounterHooks...')
	return (
		<div className="App">
			<span className="textMkd">Одземи Едно</span>
			<button onClick={() => changeCount(decrement())}>-</button>
			<span> {count} </span>
			<button onClick={() => changeCount(increment())}>+</button>
			<span className="textMkd">Додади Едно</span>
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











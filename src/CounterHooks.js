import React, { useState } from 'react'

export default function CounterHooks(props) {
	console.log('Render CounterHooks...')
	const [ count, setCount ] = useState(props.initialCount)
	return (
		<div className="App">
			<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
			<span> {count} </span>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
		</div>
	)
}





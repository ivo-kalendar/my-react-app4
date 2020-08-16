import React from 'react'
import './App.css'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

function App() {
	console.log('Render App...')
	return (
		<>
			<Counter initialCount={0} />
			<CounterHooks initialCount={0} />
		</>
	)
}

export default App

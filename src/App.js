import React, { useState } from 'react'
import './App.css'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
	console.log('Render App...')

	const [theme, setTheme] = useState('yellow')

	return (
		<ThemeContext.Provider value={{ color: theme }}>
			<button onClick={() => setTheme(prevTheme => {
				return prevTheme === 'green' ? 'blue' : 'green'
			})}>Промени Боја</button>
			<Counter initialCount={0} />
			<CounterHooks initialCount={0} />
		</ThemeContext.Provider>
	)
}

export default App

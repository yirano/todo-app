import React, { useState } from "react"
import Container from "./Container"
import Dashboard from "./Dashboard"
import tasks from '../Assets/tasks.json'

function App() {
	return (
		<div className="app">
			<Dashboard />
			<Container tasks={tasks} />
		</div>
	)
}

export default App

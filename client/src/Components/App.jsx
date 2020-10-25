import React, { useState } from "react"
import Container from "./Container"
import Dashboard from "./Dashboard"
import tasks from '../Assets/tasks.json'
import GoogleSignIn from "./GoogleSignIn"

function App() {
	return (
		<div className="app">
			<Dashboard />
			<Container tasks={tasks} />
			<GoogleSignIn />
		</div>
	)
}

export default App

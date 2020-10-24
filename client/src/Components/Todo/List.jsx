import React, { useState } from 'react'
import Card from "./Card"

const List = (props) => {
    const [tasks, setTasks] = useState(props.tasks || [])
    return (
        <div className="list">
            <h5>Today</h5>
            {tasks.map((task) => {
                return <Card task={task} />
            })}
        </div>
    )
}

export default List

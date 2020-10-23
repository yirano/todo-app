import React from 'react'

const Card = (props) => {
    console.log(props)
    const { task } = props
    return (
        <div className="card">
            <p>{task.task}</p>
            <p>{task.date}</p>
        </div>
    )
}

export default Card

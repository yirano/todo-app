import React from 'react'
import Card from "./Card"

const List = (props) => {
    return (
        <div className="list">
            <h5>Today</h5>
            {props.tasks.map((task) => {
                return <Card task={task} />
            })}
        </div>
    )
}

export default List

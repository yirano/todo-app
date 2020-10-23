import React from 'react'
import Card from "./Card"

const List = (props) => {
    return (
        <div>
            {props.tasks.map((task) => {
                return <Card task={task} />
            })}
        </div>
    )
}

export default List

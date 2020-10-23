import React from 'react'
import List from "./Todo/List"

const Container = (props) => {
    return (
        <div className="container">
            <List tasks={props.tasks} />
        </div>
    )
}

export default Container

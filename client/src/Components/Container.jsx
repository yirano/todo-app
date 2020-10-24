import React from 'react'
import Form from "./Todo/Form"
import List from "./Todo/List"

const Container = (props) => {
    return (
        <div className="container">
            <List tasks={props.tasks} />
            <Form />
        </div>
    )
}

export default Container

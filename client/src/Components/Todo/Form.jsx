import React from 'react'

const Form = () => {
    return (
        <form className="addTask">
            <input type="text" name="todo" placeholder="Add a Task" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const Form = () => {
    return (
        <form className="addTask">
            <input type="text" name="todo" placeholder="Add a Task" />
            <button type="submit">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </form>
    )
}

export default Form

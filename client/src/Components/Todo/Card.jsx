import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const { task } = props
    const [complete, setComplete] = useState(false)
    return (
        <div className="card">
            <div className={complete ? 'toggleComplete show' : 'toggleComplete hide'} onClick={() => setComplete(!complete)}>
                <div>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
            </div>
            <div className={complete ? 'task show' : 'task hide'}>
                <p>{task.task}</p>
                <p>{task.date}</p>
            </div>
            <div className={complete ? 'toggleDelete show' : 'toggleDelete hide'}>
                <div>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </div>
            </div>
        </div>
    )
}

export default Card

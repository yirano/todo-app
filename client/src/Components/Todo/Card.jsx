import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded'

const Card = (props) => {
    const { task } = props
    const [complete, setComplete] = useState(false)
    return (
        <div className="card">
            <div className={complete ? 'toggleComplete complete' : 'toggleComplete incomplete'} onClick={() => setComplete(!complete)}>
                <CheckRoundedIcon />
            </div>
            <div className={complete ? 'task complete' : 'task incomplete'}>
                <p>{task.task}</p>
                {/* <p>{task.date}</p> */}
            </div>
            <div className={complete ? 'toggleDelete complete' : 'toggleDelete incomplete'}>
                <div>
                    <CloseIcon />
                </div>
            </div>
        </div>
    )
}

export default Card

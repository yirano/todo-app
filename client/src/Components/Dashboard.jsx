import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Link } from "react-router-dom"
import List from "./Todo/List"


const Dashboard = () => {

    return (
        <div className="dashboard">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Shortcuts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to='/today' component={List} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Dashboard

import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMore from '@material-ui/icons/ExpandMore'
import List from "./Todo/List"


const Dashboard = () => {

    return (
        <div className="dashboard">
            <Accordion className="accordion">
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                // aria-controls="panel1a-content"
                // id="panel1a-header"
                >
                    <h5>Shortcuts</h5>
                </AccordionSummary>
                <AccordionDetails className="dashboardLinks">
                    <Link to='/today' className="dashboardLink">Today</Link>
                    <Link to='/today' className="dashboardLink">Next 7 Days</Link>
                    <Link to='/today' className="dashboardLink">All Tasks</Link>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Dashboard

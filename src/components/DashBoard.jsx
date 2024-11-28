import { Typography } from "@mui/material"
import "./DashBoard.css"
import DashBoardTable from "./DashBoardTable"

const DashBoard = () => {

    return <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: '3rem' }}>Dashboard</Typography>
        <Typography variant="h6" sx={{ mb: '10px' }}>Summary</Typography>
        <div className="summary">
            <div className="summary-main">
                <p className="summary-text">25</p>
                <p className="summary-label">Total tasks</p>
            </div>
            <div className="summary-main">
                <p className="summary-text">40%</p>
                <p className="summary-label">Tasks completed</p>
            </div>
            <div className="summary-main">
                <p className="summary-text">60%</p>
                <p className="summary-label">Tasks pending</p>
            </div>
            <div className="summary-main">
                <p className="summary-text">25</p>
                <p className="summary-label">Average time per <br></br> task completed</p>
            </div>

        </div>
        <Typography variant="h6" sx={{ mb: '10px' }}>Pending task summary</Typography>

        <div className="summary">
            <div className="summary-main">
                <p className="summary-text">15</p>
                <p className="summary-label">Pending tasks</p>
            </div>
            <div className="summary-main">
                <p className="summary-text">56 hrs</p>
                <p className="summary-label">Total time lapsed</p>
            </div>
            <div className="summary-main">
                <p className="summary-text">24 hrs</p>
                <p className="summary-label">Total time to finish <br></br>estimated based on endtime</p>
            </div>
        </div>
        <DashBoardTable />

    </div>
}
export default DashBoard
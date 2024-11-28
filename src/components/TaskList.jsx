import React, { useEffect, useState } from "react";
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Checkbox, Menu, Modal, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import "./TaskList.css";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddTask from "./AddTask";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";


const initialTasks = [
    {
        id: "T-00001",
        title: "Buy clothes",
        priority: 5,
        status: "Pending",
        startTime: "26-Nov-24 11:00 AM",
        endTime: "30-Nov-24 11:00 AM",
        totalTime: 96,
    },
    {
        id: "T-00002",
        title: "Finish code",
        priority: 2,
        status: "Finished",
        startTime: "25-Nov-24 09:05 AM",
        endTime: "25-Nov-24 03:15 PM",
        totalTime: 6.17,
    },
    {
        id: "T-00003",
        title: "Book travel tickets",
        priority: 4,
        status: "Pending",
        startTime: "19-Nov-24 10:00 PM",
        endTime: "20-Nov-24 11:00 PM",
        totalTime: 25,
    },
    {
        id: "T-00004",
        title: "Order groceries",
        priority: 3,
        status: "Finished",
        startTime: "14-Oct-24 10:30 AM",
        endTime: "16-Oct-24 10:30 PM",
        totalTime: 60,
    },
    {
        id: "T-00005",
        title: "Medical checkup",
        priority: 1,
        status: "Pending",
        startTime: "19-Nov-24 01:15 PM",
        endTime: "21-Dec-24 05:00 PM",
        totalTime: 51.75,
    },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: "1.5rem 2rem",
    maxWidth: '1200px',
    maxHeight: '650px',
    overflow: 'auto',
    width: '600px'
};
const TaskList = () => {
    const [openAdd, setOpenAdd] = useState(false)
    const [taskData, setTaskData] = useState('')

    useEffect(() => {
        axios.get('')
            .then((response)=>{
                
            })
    }, [])

    const handleAddClose = () => {
        setOpenAdd(false)
    }

    const handleEdit = (task) => {
        setTaskData(task)
        setOpenAdd(true)
    }

    return (
        <div style={{ padding: "2rem" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: "3rem" }}>
                Task List
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AddIcon />}
                        onClick={() => setOpenAdd(true)}
                    >
                        Add Task
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                    >
                        Delete Selected
                    </Button>
                </div>

                {/* Filters */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <Button variant="contained" startIcon={<SwapVertIcon />} style={{ borderRadius: "16px", backgroundColor: 'gray' }}{...bindTrigger(popupState)}>
                                    Sort
                                </Button>

                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem value={1}>Start time: ASC</MenuItem>
                                    <MenuItem value={2}>Start time: DSC</MenuItem>
                                    <MenuItem value={3}>End time: ASC</MenuItem>
                                    <MenuItem value={4}>End time: DSC</MenuItem>
                                    <MenuItem value={5} sx={{ color: 'red', borderTop: '1px solid red' }}>Remove sort</MenuItem>
                                </Menu>
                            </>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <Button variant="contained" endIcon={<KeyboardArrowDownIcon />} style={{ borderRadius: "16px", backgroundColor: 'white', color: 'gray' }}{...bindTrigger(popupState)}>
                                    Priority
                                </Button>

                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6} sx={{ color: 'red', borderTop: '1px solid red' }}>Remove sort</MenuItem>
                                </Menu>
                            </>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <Button variant="contained" endIcon={<KeyboardArrowDownIcon sx={{ color: "blue" }} />} style={{ borderRadius: "16px", backgroundColor: 'white', color: 'blue' }}{...bindTrigger(popupState)}>
                                    Status : Finished
                                </Button>

                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem value={1}>Start time: ASC</MenuItem>
                                    <MenuItem value={2}>Start time: DSC</MenuItem>
                                    <MenuItem value={3}>End time: ASC</MenuItem>
                                    <MenuItem value={4}>End time: DSC</MenuItem>
                                    <MenuItem value={5} sx={{ color: 'red', borderTop: '1px solid red' }}>Remove sort</MenuItem>
                                </Menu>
                            </>
                        )}
                    </PopupState>
                </div>
            </div>

            {/* Task Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "gray" }}>
                            <TableCell><Checkbox /></TableCell>
                            <TableCell>Task ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Start Time</TableCell>
                            <TableCell>End Time</TableCell>
                            <TableCell>Total Time to finish (hrs)</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {initialTasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell>{task.id}</TableCell>
                                <TableCell>{task.title}</TableCell>
                                <TableCell>{task.priority}</TableCell>
                                <TableCell>{task.status}</TableCell>
                                <TableCell>{task.startTime}</TableCell>
                                <TableCell>{task.endTime}</TableCell>
                                <TableCell>{task.totalTime}</TableCell>
                                <TableCell onClick={() => handleEdit(task)}><EditIcon style={{ cursor: 'pointer' }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={openAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddTask task={taskData} handleAddClose={handleAddClose} />
                </Box>
            </Modal>
        </div>
    );
};

export default TaskList;

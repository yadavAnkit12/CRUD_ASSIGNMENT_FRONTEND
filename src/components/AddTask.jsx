import React, { useEffect, useState } from "react";
import { Typography, TextField, Switch, Button, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import * as Yup from "yup";
import axios from "axios";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    priority: Yup.number().required('Priority is required').min(1, 'Minimum value is 1').max(5, 'Maximum value is 5'),
    startTime: Yup.date().required('Start time is required'),
    endTime: Yup.date().required('End time is required'),
});

const AddTask = (props) => {
    const [taskId, setTaskId] = useState('')

    useEffect(() => {
        if (props.task.id) {
            setTaskId(taskId)
        }
    }, [taskId])

    const handleSubmit = (values) => {
        console.log(values);
        const formData = new FormData();

        // Append the values to formData
        formData.append('title', values.title);
        formData.append('priority', values.priority);
        formData.append('status', values.status);
        formData.append('start_time', values.startTime.toISOString());
        formData.append('end_time', values.endTime.toISOString());

        if (props.task.id) {
            // Call the API
            formData.append('id', props.task.id)
            axios.put('https://your-api-endpoint.com/tasks', formData)
                .then(response => {
                    alert('Task added successfully')
                    // Handle success (maybe redirect, reset form, etc.)
                })
                .catch(error => {
                    alert('Something went wrong')
                    // Handle error (show message to user, etc.)
                });
        } else {
            // Call the API
            axios.post('https://your-api-endpoint.com/tasks', formData)
                .then(response => {
                    alert('Task added successfully')
                    // Handle success (maybe redirect, reset form, etc.)
                })
                .catch(error => {
                    alert('Something went wrong')
                    // Handle error (show message to user, etc.)
                });
        }


    };


    const formik = useFormik({
        initialValues: {
            title: '',
            priority: '',
            status: false,
            startTime: null,
            endTime: null,
        },
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <div>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{taskId ? 'Edit task' : "Add new task"}</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Task Id : {taskId}</Typography>
            {/* Title Input */}
            <TextField
                variant="outlined"
                color="secondary"
                fullWidth
                id="title"
                label="Title"
                autoComplete="off"
                value={formik.values.title}
                required
                onBlur={formik.handleBlur}
                {...formik.getFieldProps('title')}
                error={formik.touched.title && !!formik.errors.title}
                helperText={formik.touched.title && formik.errors.title}
                sx={{ mb: 2, mt: 4, maxWidth: '280px' }}
            />

            {/* Priority and Status Section */}
            <div style={{ display: 'flex', gap: "10px" }}>
                <div style={{ flex: "50%" }}>
                    <TextField
                        type="number"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        id="priority"
                        label="Priority"
                        autoComplete="off"
                        value={formik.values.priority}
                        required
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps('priority')}
                        error={formik.touched.priority && !!formik.errors.priority}
                        helperText={formik.touched.priority && formik.errors.priority}
                        sx={{ mb: 2, mt: 1, maxWidth: '280px' }}
                    />
                </div>

                {/* Status Switch */}
                <div style={{ flex: "50%" }}>
                    <div style={{ marginLeft: '10px' }}>Status</div>
                    <FormControlLabel
                        control={<Switch
                            checked={formik.values.status}
                            onChange={(e) => formik.setFieldValue('status', e.target.checked)}
                            {...label}
                        />}
                        label={formik.values.status ? "Finished" : "Pending"}
                    />
                </div>

            </div>

            {/* Start and End Time Pickers */}
            <div style={{ display: 'flex', gap: "10px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Start time"
                        value={formik.values.startTime}
                        onChange={(newValue) => formik.setFieldValue("startTime", newValue)}
                        renderInput={(props) => <TextField {...props} />}
                    />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="End time"
                        value={formik.values.endTime}
                        onChange={(newValue) => formik.setFieldValue("endTime", newValue)}
                        renderInput={(props) => <TextField {...props} />}
                    />
                </LocalizationProvider>
            </div>

            {/* Submit Buttons */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <Button variant="contained" type="submit" onClick={formik.handleSubmit}>
                    {taskId ? "Update" : "Add task"}
                </Button>
                <Button variant="outlined" onClick={() => props.handleAddClose()}>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default AddTask;

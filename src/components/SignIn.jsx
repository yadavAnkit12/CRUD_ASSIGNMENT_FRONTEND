import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik"
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').min(6).max(30).required('Email is required'),
    password: Yup.string().required('Password is Required')
});
const SignIn = (props) => {

    const handleSubmit = (values) => {
        console.log(values)
        props.setSelectedTab('DashBoard')
        props.setIsLogin(!props.isLogin)

    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    })

    return <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: '3rem' }}>Welcome to To-do app</Typography>
        <TextField
            type="string"
            variant="outlined"
            color="secondary"
            fullWidth
            id="email"
            label="Email"
            autoComplete='off'
            InputLabelProps={{ shrink: true }}
            value={formik.values.email}
            placeholder="xyz@gmail.com"
            required
            {...formik.getFieldProps('email')}
            onBlur={formik.handleBlur}
            error={(formik.touched.email && !!formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ mb: 2, mt: 1, maxWidth: '280px' }}
        />
        <TextField
            type="string"
            variant="outlined"
            color="secondary"
            fullWidth
            id="password"
            label="Password"
            autoComplete='off'
            InputLabelProps={{ shrink: true }}
            value={formik.values.password}
            required
            {...formik.getFieldProps('password')}
            onBlur={formik.handleBlur}
            error={(formik.touched.password && !!formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ mb: 2, mt: 1, maxWidth: '280px' }}
        />

        <Button variant="contained" color="secondary" sx={{ maxWidth: '280px' }} onClick={formik.handleSubmit} >Sign in to continue</Button>



    </div>
}
export default SignIn
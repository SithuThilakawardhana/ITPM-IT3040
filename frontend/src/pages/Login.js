import React, { useEffect } from 'react';
import { Box, TextField, Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInAction } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            alert (JSON.stringify(values, null, 2));
            actions.resetForm();
        }
    });

  return (
    <> 
       <NavBar />
       <Box sx={{ height: '81vh',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center'}}>
            <Box onSubmit={formik.handleSubmit} component='form' className='form_style border_style' >
                <Box sx={{ display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         width: '100%' }} >
                    <Avatar sx={{
                        m:1,
                        bgColor: 'primary.main', 
                        mb: 3 }}>
                            <LockClockOutlined />
                    </Avatar>
                    <TextField sx= {{mb: 3}}
                        fullWidth
                        id='email'
                        label='E-mail'
                        name='email'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder='E-mail'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField sx= {{mb: 3}}
                        fullWidth
                        id='password'
                        name='Password'
                        label='Password'
                        type='password'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder='Password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button fullWidth variant='contained' type='submit'>Log In</Button>
                </Box>
            </Box>
       </Box>
       <Footer />
    </>
  )
}

export default Login

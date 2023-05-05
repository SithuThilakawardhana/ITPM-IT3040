import { Avatar, Box } from '@mui/material';
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInAction } from '../redux/actions/userAction';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";


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



const LogIn = () => {

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, userInfo } = useSelector(state => state.signIn);
    useEffect(() => {

        if (isAuthenticated) {
            if (userInfo.role === 1) {
                navigate('/admin/dashboard');
            } else {
                navigate('/user/dashboard');
            }
        }

    }, [isAuthenticated])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(userSignInAction(values));
            actions.resetForm();
        }

    })

    return (
        <>
            <Navbar />
            <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockClockOutlined />
                        </Avatar>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            type="email"
                            id="email"
                            onChange={handleChange}
							value={data.email}
							required
							// className={styles.input}
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="E-mail"
                            // value={formik.values.email}
                            // onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            onChange={handleChange}
							value={data.password}
							required
							// className={styles.input}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Password"
                            // value={formik.values.password}
                            // onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        {error && <div >{error}</div>}

                        <Button fullWidth variant="contained" type='submit' >
                        <Link to='/dashboard' style={{ color: 'white', textDecoration: "none" }}>
                        Log In
                            </Link>
                        </Button>

                        <Button  style={{ background: 'white' ,marginTop: '10px', border: '1px solid navy blue'  }}
                            fullWidth variant="contained" type='submit' >
                            <Link to='/signup' style={{ color: ' #1e90ff', textDecoration: "none" }}>
                                Sign Up
                            </Link>    
                        </Button>
                        <br/>
                        <Grid container>
                            <Grid item xs>
                             <Link href="#" variant="body2">
                               Forgot password?
                             </Link>
                            </Grid>
            
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default LogIn
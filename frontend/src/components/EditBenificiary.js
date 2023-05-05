import { Avatar, Box } from '@mui/material';
import React, { useEffect } from 'react';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInAction } from '../redux/actions/userAction';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Nav from './Nav'
import './style.css'
import './Sidebar'


const validationSchema = yup.object({
    name: yup
        .string('Edit your name')
        .required('name is required'),
    address: yup
        .string('Edit your address')
        .required('address is required'),
    phone: yup
        .string('Edit your phone number')
        .min(10, 'phone should be of 10 numbers length')
        .required('phone is required'),
    needs: yup
        .string('Edit your needs')
        .required('needs are required'),
});
function EditBenificiary({ Toggle }) {    
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            phone: '',
            donation: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            actions.resetForm();
        }

    })
    return (        
    
        <div className='px-3'>            
            <Nav Toggle={Toggle} />            
                <div className='container-fluid'>                
                    <div className='row g-3 my-2'>                    
                    <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                              
                                  <h4>Edit Benificiary Details</h4>
                                  <br/>
                                <TextField sx={{ mb: 3 }}
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name='Name'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Edit Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                                <TextField sx={{ mb: 3 }}
                                    fullWidth
                                    id="address"
                                    name="address"
                                    label="Address"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Edit Address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />

                                    <TextField sx={{ mb: 3 }}
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Edit Phone Number"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />

                                    <TextField sx={{ mb: 3 }}           
                                    fullWidth
                                    id="donations"
                                    name="donations"
                                    label="Donations Type"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    placeholder="Edit Requesting Type"
                                    value={formik.values.donations}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.donations && Boolean(formik.errors.donations)}
                                    helperText={formik.touched.donations && formik.errors.donations}
                                />

                                <Button fullWidth variant="contained" type='submit' >
                                <Link to='/dashboard' style={{ color: 'white', textDecoration: "none" }}>
                                Submit
                                    </Link>
                                </Button>

                                <Button  style={{ background: 'white' ,marginTop: '10px', border: '1px solid navy blue'  }}
                                    fullWidth variant="contained" type='submit' >
                                    <Link to='/dashboard' style={{ color: ' #1e90ff', textDecoration: "none" }}>
                                        Cancel
                                    </Link>    
                                </Button>
                                <br/>
                                
                            </Box>
                        </Box>
                        </Box>           
                    </div>           
                </div>   
                </div>    
                
            )
        }
export default EditBenificiary

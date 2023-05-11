import { Box } from '@mui/material'
import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'

const AboutUs = () => {
  return (
    <>
        <NavBar/>
        <Box 
            sx={{ height: '81vh', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
            <h1>About Us Page</h1>
        </Box>
        <Footer/>
    </>
  )
}

export default AboutUs;
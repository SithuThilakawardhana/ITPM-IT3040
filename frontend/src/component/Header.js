import React from 'react'
import { Box,styled } from '@mui/material'
import headerImage from '../images/headerImage.jpg'
import SearchInputEl from './SearchInputEl'

const Header = () => {

  const StyleHeader = styled(Box)(({theme})=>(
    {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight : 400,
        backgroundImage : `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition : 'center',
        backgroundColor : theme.palette.secondary.main
    }
  ));

  return (
    <>
       <StyleHeader>
           <SearchInputEl/>
       </StyleHeader>
    </>
  )
}

export default Header

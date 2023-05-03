import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardElement from '../../component/CardElement'


const UserdonateHistory = () => {
    const { user } = useSelector(state => state.userProfile);


    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa" }}> Donation History</Typography>
                <Box>
                    {
                        user && user.donateHistory.map((history, i) => (
                            <CardElement
                                key={i}
                                id={history._id}
                                donateTitle={history.title}
                                description={history.description}
                                category=''
                                location={history.location}
                            />
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default UserdonateHistory
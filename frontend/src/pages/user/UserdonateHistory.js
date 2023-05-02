import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardElement from '../../components/CardElement'
import { userProfileAction } from '../../redux/actions/userAction'

const UserdonateHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

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
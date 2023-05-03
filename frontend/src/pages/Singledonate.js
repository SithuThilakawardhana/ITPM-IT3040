import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import LoadingBox from '../components/LoadingBox'
import Navbar from '../components/Navbar'
import { donateLoadSingleAction } from '../redux/actions/donateAction'
import Button from '@mui/material/Button'
import { userApplydonateAction } from '../redux/actions/userAction'


const Singledonate = () => {
    const dispatch = useDispatch();
    const { singledonate, loading } = useSelector(state => state.singledonate)
    const { id } = useParams();
    useEffect(() => {
        dispatch(donateLoadSingleAction(id));
    }, [id]);

    const applyForAdonate = () => {
        dispatch(userApplydonateAction({
            title: singledonate && singledonate.title,
            description: singledonate && singledonate.description,
            salary: singledonate && singledonate.salary,
            location: singledonate && singledonate.location
        }))
    }

    return (
        <>

            <Box sx={{ bgcolor: "#fafafa" }}>

                <Navbar />
                <Box sx={{ height: '85vh' }}>
                    <Container sx={{ pt: '30px' }}>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            <Box sx={{ flex: 4, p: 2 }}>

                                {
                                    loading ? <LoadingBox /> :

                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="h3">
                                                    {singledonate && singledonate.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Salary</Box>: ${singledonate && singledonate.salary}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Category</Box>: {singledonate && singledonate.donateType ? singledonate.donateType.donateTypeName : "No category"}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <Box component="span" sx={{ fontWeight: 700 }}>Location</Box>: {singledonate && singledonate.location}
                                                </Typography>
                                                <Typography variant="body2" sx={{ pt: 2 }}>

                                                    {singledonate && singledonate.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                }
                            </Box>
                            <Box sx={{ flex: 1, p: 2 }}>
                                <Card sx={{ p: 2 }}>
                                    <Button onClick={applyForAdonate} sx={{ fontSize: "13px" }} variant='contained'>Applied for this donation</Button>
                                </Card>
                            </Box>

                        </Stack>

                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default Singledonate
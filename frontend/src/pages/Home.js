import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { donateLoadAction } from '../redux/actions/donateAction'
import { Link, useParams } from 'react-router-dom'
import CardElement from '../components/CardElement'
import Footer from '../components/Footer'
import LoadingBox from '../components/LoadingBox'
import SelectComponent from '../components/SelectComponent'
import { donateTypeLoadAction } from '../redux/actions/donateTypeAction'
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import styles from "./styles.module.css";


const Home = () => {
    const { donate, setUniqueLocation, pages, loading } = useSelector(state => state.loaddonate);

    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { keyword, location } = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(donateLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);

    useEffect(() => {
        dispatch(donateTypeLoadAction());
    }, []);

    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }

    return (
        <>
            <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" , maxHeight:'100%' }}>

                <Navbar />
                <Header />
                <Container sx={{ bgcolor: "#fafafa", minHeight: "-20vh" , maxHeight:'100%' }}>
                    <Stack
                        
                    >
                        {/* <Box sx={{ flex: 2, p: 2 }}>
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter donate by category
                                    </Typography>
                                </Box>
                                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />

                            </Card>

                            
                        </Box> */}
                        <Box sx={{ flex: 5, p: 2 }}>
                            {
                                loading ?
                                    <LoadingBox /> :
                                    donate && donate.length === 0 ?
                                        <>
                                            <Box
                                                sx={{
                                                    minHeight: '350px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>

                                                <h2>No result found!</h2>
                                            </Box>
                                        </> :


                                         donate && donate.map((donate, i) => (
                                            <CardElement
                                                key={i}
                                                id={donate._id}
                                                donateTitle={donate.title}
                                                description={donate.description}
                                                category={donate.donateType ? donate.donateType.donateTypeName : "No category"}
                                                location={donate.location}
                                            />
                                        ))
                            }
                            {/* <Stack spacing={2} >
                                <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                            </Stack> */}
                        </Box>
                    </Stack>
                </Container>
                <br/><br/><br/>
                <Footer />
            </Box>
          

        </>
    )
}

export default Home
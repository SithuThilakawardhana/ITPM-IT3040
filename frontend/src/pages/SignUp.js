import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from "react";
import axios from "axios";
// import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const SignUp = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

  const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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

  return (
    <>
    <Navbar />
    <ThemeProvider theme={theme}>
      <Container component="main" maxHeight="100%" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           <h2>Create Account</h2>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
							    value={data.firstName}
                  // className={styles.input}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="text"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
							    value={data.lastName}
                  // className={styles.input}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
							    value={data.email}
                  // className={styles.input}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
							    value={data.password}
                  // className={styles.input}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {error && <div >{error}</div>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Link href="/login" variant="body2">
                  Sign Up
                </Link>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/loginbenificiary" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <Footer />
    </>
  );
};

export default SignUp;
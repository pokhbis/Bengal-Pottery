import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginImg from '../../Images/LoginImg/loginImg.png';

const Login = () => {
    const { user, authError, loginUser, signInWithGoogle, isLoading } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 13 }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Log-In</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}

                        {
                            user?.email && <Alert severity="success"> Congratulations! User Logged-in Successfully!</Alert>
                        }
                        {authError && <Alert severity="success"> {authError}</Alert>}
                    </form>
                    <p>-------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Log-in</Button>
                </Grid>
                <Grid sx={{ mt: 5 }} item xs={12} md={6}>
                    <img style={{ width: '100%', height: '550px' }} src={loginImg} alt="" />
                </Grid>

            </Grid>

        </Container >
    );
};

export default Login;
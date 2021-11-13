import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/LoginImg/loginImg.png';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData)
    }
    console.log(loginData)
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password1 !== loginData.password2) {
            alert('Password Did not Matched. Try Again.');
            return;
        }
        registerUser(loginData.email, loginData.password1, loginData.name, history)

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 13 }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password1"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Re-Enter Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Register</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>

                    </form>}

                    {isLoading && <CircularProgress />}

                    {
                        user?.email && <Alert severity="success"> Congratulations! User Created Successfully!</Alert>
                    }
                    {authError && <Alert severity="success"> {authError}</Alert>}
                </Grid>
                <Grid sx={{ mt: 5 }} item xs={12} md={6}>
                    <img style={{ width: '100%', height: '550px' }} src={login} alt="" />
                </Grid>

            </Grid>

        </Container >
    );
};

export default Register;
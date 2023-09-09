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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateButton, updatePassBox } from '../styles/UpdatePasswordStyle';

const defaultTheme = createTheme();

/* this component is for updating password if the user is already logged-In */

export default function UpdatePasswordForm() {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let details = {
            name: data.get('name'),
            email: data.get('email'),
            passwordCurrent: data.get('currentpassword'),
            password: data.get('newpassword'),
            appType: "ott",
        };
        let result = ''
        let token = JSON.parse(localStorage.getItem('user-info')).token
        fetch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                projectid: 'f104bi07c490'
            },
            body: JSON.stringify(details)

        })

            /* if the password changed is successfull then it will 
            redirect to HomePage */

            .then((res) => res.json())
            .then((response) => {
                result = response.status
                if (result == 'success') {
                    alert('Your Password has been Changed Successfully...!!!')
                    navigate('/')
                }
                else {
                    const msg = response.message
                    alert(msg)
                }
            })
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={updatePassBox}>
                    <Typography component="h1" variant="h5" color='black'>
                        YouTube Update Password
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            backgroundColor="white"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="currentpassword"
                            label="Current Password"
                            type="password"
                            id="currentpassword"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="newpassword"
                            label="New Password"
                            type="password"
                            id="newpassword"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={updateButton}
                        >
                            Update Password
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
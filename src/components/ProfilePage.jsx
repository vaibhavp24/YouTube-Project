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
import { AiFillYoutube } from 'react-icons/ai'
// import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { flex } from '../styles/styles';

const defaultTheme = createTheme();

export default function ProfilePage() {
    const email = JSON.parse(localStorage.getItem('user-info')).data.email
    const name = JSON.parse(localStorage.getItem('user-info')).data.name


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
                    <AiFillYoutube icon="fa-brands fa-youtube" size='9vh' style={{ color: "#ff0000", }} />
                    {/* </Avatar> */}
                    <Typography component="h1" variant="h5">
                        YouTube Profile Page
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            value={email}
                            name="email"
                            onChange={(e) => setName1(e.target.value)}
                            autoComplete="email"
                        autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            value={name}
                            label="Password"
                            type="name"
                            id="name"
                        onChange={(e) => setPassword1(e.target.value)}
                        autoComplete="current-password"
                        /> */}
                        <Box p='20px 0' display={flex} gap={2}>
                            <Typography fontWeight={'bold'}>Email : </Typography>
                            <Typography>{email}</Typography>
                        </Box>
                        <Box display={flex} gap={2}>
                            <Typography fontWeight={'bold'}>Name : </Typography>
                            <Typography>{name}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
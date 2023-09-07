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
import { flex } from '../styles/styles';

const defaultTheme = createTheme();

/* UserProfile component is made to show the user details i.e name and email id */

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
                    {/* <AiFillYoutube icon="fa-brands fa-youtube" size='9vh' style={{ color: "#ff0000", }} /> */}
                    <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="youtube" height='120vh' width='120vh' />
                    <Typography component="h1" variant="h5">
                        YouTube Profile Page
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
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
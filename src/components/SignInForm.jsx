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
import { useEffect } from 'react';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

const defaultTheme = createTheme();

/* From this component user can signin to the home page
after signup or if the user already have account */

export default function SignInForm({ setAuth, setShowSignin }) {
    const [name1, setName1] = useState('')
    const [password1, setPassword1] = useState('')
    const [error, setError] = useState(false)
    let details = {}
    const handleSubmit = (event) => {
        event.preventDefault();
        // getting values of email and password from the input type
        const data = new FormData(event.currentTarget);
        details = {
            email: data.get('email'),
            password: data.get('password'),
            appType: "ott",
        };
        let result = ''
        // fetching from the api with POST method
        fetch('https://academics.newtonschool.co/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                projectid: 'f104bi07c490'
            },
            body: JSON.stringify(details)
        })
            .then((res) => res.json())
            .then((response) => {
                result = response.status
                if (result == 'success') {
                    setError(false)
                    localStorage.setItem('user-info', JSON.stringify(response))
                    setAuth(true)
                } else {
                    setError(true)
                }
            })
    };

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
                    <AiFillYoutube icon="fa-brands fa-youtube" size='9vh' style={{ color: "#ff0000", }} />
                    <Typography component="h1" variant="h5">
                        YouTube Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type='email'
                            onChange={(e) => setName1(e.target.value)}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword1(e.target.value)}
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#E31212' }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link onClick={() => setShowSignin(false)} href='#' variant="body2">
                                    "Don't have an account? Sign Up"
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* if email or password is not correct then this Alert will be shown */}
                    {error &&
                        <Alert severity="error">Email Id or Password is Incorrect !!!</Alert>
                    }
                </Box>
            </Container>
        </ThemeProvider>
    );
}
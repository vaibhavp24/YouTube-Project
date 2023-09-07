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

/* From this component user can signup to create the account
after signup this page will redirect to signin page */

export default function SignUpForm({ setShowSignin }) {

    const [wrongName, setWrongName] = useState(false)
    const [wrongEmail, setWrongEmail] = useState(false)

    let details
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        /* getting details of the user on input type
         i.e name , email , password */
        details = {
            name: data.get('firstName'),
            email: data.get('email'),
            password: data.get('password'),
            appType: "ott"
        };
        if (ValidateEmail(data.get('email')) && isValidName(data.get('firstName')) && isValidName(data.get('lastName'))) {
            fetch('https://academics.newtonschool.co/api/v1/user/signup', {
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
                    if (response.status == 'success') {
                        setShowSignin(true)
                    }
                    else {
                        alert('Something went very wrong')
                    }
                })
        }
    };

    /* validation for name i.e name only consist of alphabets */
    function isValidName(name) {
        const nameRegex = /^[A-Za-z\- ]+$/;
        if (nameRegex.test(name) && checkLength(name)) {
            setWrongName(false)
            return true;
        }
        else {
            setWrongName(true)
            return false
        }
    }
    /* validation for email i.e email is in the correct format or not */
    function ValidateEmail(email) {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailformat.test(email) && checkLength(email)) {
            setWrongEmail(false)
            return true
        }
        else {
            setWrongEmail(true)
            return false
        }
    }
    /* check length of name and email i.e should be less than 40 characters */
    function checkLength(text) {
        return text.length < 40
    }

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
                        YouTube Sign up
                    </Typography>
                    <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    type='text'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type='email'
                                    autoComplete="email"
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
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#E31212' }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={() => setShowSignin(true)} href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* if name is not correct then this Alert will be shown */}
                {
                    wrongName &&
                    <Alert severity="error">Name is not in Correct Format or length should be less than 40 characters !!!</Alert>
                }
                {/* if email is not correct then this Alert will be shown */}
                {
                    wrongEmail &&
                    <Alert severity="error">Email is not in Correct Format or length should be less than 40 characters !!!</Alert>
                }
            </Container>
        </ThemeProvider>
    );
}
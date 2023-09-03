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

const defaultTheme = createTheme();

export default function SignInForm() {
    const [name1, setName1] = useState('')
    const [password1, setPassword1] = useState('')
    // const navigate = useNavigate()
    // const history = useHistory();
    let details = {}
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        details = {
            email: data.get('email'),
            password: data.get('password'),
            appType: "ott",
        };
        // console.log('details', details);
        let result = ''
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
                    localStorage.setItem('user-info', JSON.stringify(response))
                }
            })
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
                    <Box display='flex' flexDirection='row' alignItems='center'>
                        <AiFillYoutube icon="fa-brands fa-youtube" size='9vh' style={{ color: "#ff0000", }} />
                        <Typography fontWeight={800} fontFamily='Arial Narrow' variant="h4" alignItems='center' >
                            YouTube Premium
                        </Typography>
                    </Box>
                    {/* </Avatar> */}
                    <br />
                    <Box component="form" textAlign='center' justifyContent='center' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Typography fontSize='20px'>
                            YouTube and YouTube Music ad-free,
                        </Typography>
                        <Typography fontSize='20px'>
                            offline, and in the background
                        </Typography>
                        <Box p={2}>
                            <Button
                                type="submit"
                                // fullWidth
                                variant="contained"
                                // onClick={login}
                                sx={{ mt: 3, mb: 2, backgroundColor: '#3ea6ff', color: 'black' }}
                            >
                                Get Youtube Premium
                            </Button>
                        </Box>
                        <Typography fontSize='17px'>
                            Prepaid and subscription plans available. Prices start at
                        </Typography>
                        <Typography fontSize='17px'>
                            ₹129.00/month. Free trials available with subscription plans only.
                        </Typography>
                        <Typography pt={3}>
                            Or save money with an
                            <Link pl={1}>
                                annual, family or student plan
                            </Link>
                        </Typography>
                        <Typography pt={2}>
                            <Link>
                                Restrictions apply. Learn more here.
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
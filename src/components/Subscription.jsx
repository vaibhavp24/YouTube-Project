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

const defaultTheme = createTheme();

export default function Subscription() {
    const [name1, setName1] = useState('')
    const [password1, setPassword1] = useState('')
    let details = {}

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
                    <Box display='flex' flexDirection='row' alignItems='center'>
                        <AiFillYoutube icon="fa-brands fa-youtube" size='9vh' style={{ color: "#ff0000", }} />
                        <Typography fontWeight={800} fontFamily='Arial Narrow' variant="h4" alignItems='center' >
                            YouTube Premium
                        </Typography>
                    </Box>
                    <br />
                    <Box component="form" textAlign='center' justifyContent='center' sx={{ mt: 1 }}>
                        <Typography fontSize='20px'>
                            YouTube and YouTube Music ad-free,
                        </Typography>
                        <Typography fontSize='20px'>
                            offline, and in the background
                        </Typography>
                        <Box p={2}>
                            <Button
                                type="submit"
                                variant="contained"
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
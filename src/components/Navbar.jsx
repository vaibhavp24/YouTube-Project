import React from 'react'
import AppBar from '@mui/material/AppBar'
import { appBar, flex, flexAlignCenter, hideOnMobile, toolbarWrapper } from '../styles/styles'
import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import { AiFillYoutube } from 'react-icons/ai'
import MenuIcon from '@mui/icons-material/Menu'
import Search from './Search'
import Upload from './Upload'
import NotificationsList from './NotificationsList'
import UserProfile from './UserProfile'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setAuth, handleDrawerToggle }) => {
    const navigate = useNavigate()
    return (
        <AppBar component='nav' sx={appBar}>
            <Toolbar>
                <Box sx={toolbarWrapper}>
                    <Box sx={flexAlignCenter}>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Box display={flex} onClick={() => navigate('/')} sx={{ cursor: 'pointer', alignItems: 'center' }}>
                            {/* <AiFillYoutube icon="fa-brands fa-youtube" size='5vh' style={{ color: "#ff0000", }} /> */}
                            <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="youtube" height='28vh' width='35vh' />
                            <Typography fontFamily={'sans-serif'} variant='h6' component="div" sx={{ fontSize: 22, ml: 1, fontFamily: 'Oswald', cursor: 'pointer' }}>
                                YouTube
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={hideOnMobile}>
                        <Search />
                    </Box>
                    <Box justifyContent='center' sx={hideOnMobile}>
                        <Upload />
                        <NotificationsList />
                        <UserProfile setAuth={setAuth} />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
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
import { logo } from '../styles/NavbarStyle'

/* All the functionalities present in the navbar are described in Navbar component */

const Navbar = ({ setAuth }) => {
    const navigate = useNavigate()
    return (
        <AppBar component='nav' sx={appBar}>
            <Toolbar>
                <Box sx={toolbarWrapper}>
                    <Box sx={flexAlignCenter} width='1rem' onClick={() => navigate('/')}>
                        {/* <Box display={flex} onClick={() => navigate('/')} sx={{ cursor: 'pointer', alignItems: 'center' }}> */}
                        {/* Youtube logo */}
                        <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="youtube" height='28vh' width='35vh' />
                        <Typography variant='h6' component="div" sx={logo}>
                            YouTube
                        </Typography>
                        {/* </Box> */}
                    </Box>
                    <Box width='5%' sx={hideOnMobile}>
                        {/* Search Bar */}
                        <Search />
                    </Box>
                    <Box sx={flexAlignCenter}>
                        {/* here Upload , NotificationList and UserProfile components are made to look this as original Youtube website 
                        and were not mentioned in the guidelines */}
                        {/* Upload video section */}
                        <Upload />
                        {/* NotificationList */}
                        <NotificationsList />
                        {/* UserProfile  */}
                        <UserProfile setAuth={setAuth} />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
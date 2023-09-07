import { Avatar, Box, Button, Divider, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import React from 'react'
import { FaLanguage, FaRegSun, FaUserCircle } from 'react-icons/fa'
import { inlineText } from '../styles/styles'
import UseToggle from '../hooks/UseToggle'
import { GrChannel } from 'react-icons/gr'
import { PiTelevisionSimpleBold } from 'react-icons/pi'
import { SiReasonstudios } from 'react-icons/si'
import { MdCardMembership } from 'react-icons/md'
import { AiOutlineDatabase } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

/* this component is made to show avatar with user initial on the navbar
and a sign out button so the user can sign out from the homepage */

const UserProfile = ({ setAuth }) => {
    const navigate = useNavigate()
    const removeItem = () => {
        if (localStorage.length !== 0) {
            localStorage.clear()
            setAuth(false)
        }
    }
    const { el, open, handleClick, handleClose } = UseToggle()
    const name = JSON.parse(localStorage.getItem('user-info')).data.name
    const firstLetter = name.charAt(0)
    return (
        <Box sx={{ px: 1 }}>
            <Button id='basic-button' onClick={handleClick}>
                <Avatar sx={{ bgcolor: 'gray', width: 30, height: 30, alignItems: "center", justifyContent: 'center' }}>{firstLetter}</Avatar>
            </Button>
            <Menu
                id='basic-menu'
                anchorEl={el}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": 'basic-button'
                }}
            >
                <ListItem sx={{ margin: '-10px', backgroundColor: 'black', color: 'white' }} alignItems='flex-start'>
                    <ListItemAvatar onClick={() => navigate('/profilepage')} sx={{ cursor: 'pointer' }}>
                        <Avatar alt='Channel Avatar' />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={
                        <>
                            <Typography sx={inlineText} component='span'>
                                <Link href='#' underline='none'>Manage Your Google Account</Link>
                            </Typography>
                        </>
                    }>
                    </ListItemText>
                </ListItem>
                <Box sx={{ minWidth: 300, marginBottom: '-8px', color: 'white', backgroundColor: 'black', borderTop: '1px solid #ddd' }}>
                    {
                        <List sx={{ p: 0 }} >
                            {<>
                               
                                <ListItem disablePadding>
                                    <ListItemButton onClick={removeItem}>
                                        <ListItemIcon><SiReasonstudios color='white' size={24} /></ListItemIcon>
                                        <ListItemText>Sign out</ListItemText>
                                    </ListItemButton>
                                </ListItem>

                                
                            </>
                            }
                        </List>
                    }
                </Box>
            </Menu>
        </Box>
    )
}

export default UserProfile
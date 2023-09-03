import { Avatar, Box, Button, Divider, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import React from 'react'
import { FaLanguage, FaRegSun, FaUserCircle } from 'react-icons/fa'
import { inlineText } from '../styles/styles'
// import { userProfileItems } from '../data/app.data.jsx'
import UseToggle from '../hooks/UseToggle'
import { GrChannel } from 'react-icons/gr'
import { SiReasonstudios } from 'react-icons/si'
import { MdCardMembership } from 'react-icons/md'
import { AiOutlineDatabase } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

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
    // console.log(first);
    // console.log(name);
    return (
        <Box sx={{ px: 1 }}>
            <Button id='basic-button' onClick={handleClick}>
                {/* <FaUserCircle size={24} /> */}
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
                <ListItem sx={{ pt: 0, pb: 1 }} alignItems='flex-start'>
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
                <Box sx={{ minWidth: 300, borderTop: '1px solid #ddd' }}>
                    {
                        // userProfileItems.map(item => {
                        // return (
                        <List sx={{ p: 0 }} >
                            {<>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><GrChannel size={24} /></ListItemIcon>
                                        <ListItemText>Your Channel</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><SiReasonstudios size={24} /></ListItemIcon>
                                        <ListItemText>Youtube Studio</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><GrChannel size={24} /></ListItemIcon>
                                        <ListItemText>Switch Account</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={removeItem}>
                                        <ListItemIcon><SiReasonstudios size={24} /></ListItemIcon>
                                        <ListItemText>Sign out</ListItemText>
                                    </ListItemButton>
                                </ListItem>

                                <hr />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><MdCardMembership size={24} /></ListItemIcon>
                                        <ListItemText>Purchase & Membership</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><AiOutlineDatabase size={24} /></ListItemIcon>
                                        <ListItemText>Your data in Youtube</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <hr />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><FaRegSun size={24} /></ListItemIcon>
                                        <ListItemText>Appearance: Device theme</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><FaLanguage size={24} /></ListItemIcon>
                                        <ListItemText>Language: British English</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </>
                                // )
                            }
                        </List>
                        // )
                    }
                    {/* } */}
                </Box>
            </Menu>
        </Box>
    )
}

export default UserProfile
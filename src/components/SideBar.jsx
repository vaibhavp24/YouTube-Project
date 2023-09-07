import React from "react";
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { MdExitToApp, MdHistory, MdLockReset, MdHome, MdLibraryBooks, MdThumbUp } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";

// All the buttons present in the sidelist are made from here

const SideBar = ({ setAuth }) => {
    const navigate = useNavigate()

    /* if the user want to logout then his info will be 
    removed from the localstorage
     on click of LogOut button */
     
    const removeItem = () => {
        localStorage.removeItem('user-info')
        setAuth(false)
    }
    return (
        <Stack
            direction="column"
            sx={{
                width: { xs: '2', md: '5' },
                gap: '50vh'
            }}
        >
            <Box>
                <List sx={{ p: 0 }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/')}>
                            <ListItemIcon><MdHome color="white" size={23} /></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/subscription')}>
                            <ListItemIcon><MdHome color="white" size={23} /></ListItemIcon>
                            <ListItemText>Subscription</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/liked')}>
                            <ListItemIcon><MdThumbUp color="white" size={23} /></ListItemIcon>
                            <ListItemText>Liked Videos</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate('/updatepass')}>
                            <ListItemIcon><MdLockReset color="white" size={23} /></ListItemIcon>
                            <ListItemText>Update Password</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={removeItem}>
                            <ListItemIcon><MdExitToApp color="white" size={23} /></ListItemIcon>
                            <ListItemText>Log-Out</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Typography pl={2} className="copyright" variant="body2" sx={{ mt: 1.5, color: "white", }}>
                    Copyright © Vaibhav Padole
                </Typography>
            </Box>
        </Stack>
    )
}

export default SideBar;
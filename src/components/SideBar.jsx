import React from "react";
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { MdExitToApp, MdHistory, MdLockReset, MdHome, MdLibraryBooks, MdThumbUp } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";
import { iconStyle, sidebarText } from "../styles/sidebar";

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
        <Box>
            <List sx={{ p: 0 }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemIcon sx={iconStyle}><MdHome size={23} /></ListItemIcon>
                        <ListItemText sx={sidebarText}>Home</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/subscription')}>
                        <ListItemIcon sx={iconStyle}><MdHome size={23} /></ListItemIcon>
                        <ListItemText sx={sidebarText}>Subscription</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/liked')}>
                        <ListItemIcon sx={iconStyle}><MdThumbUp size={23} /></ListItemIcon>
                        <ListItemText sx={sidebarText}>Liked Videos</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/updatepass')}>
                        <ListItemIcon sx={iconStyle}><MdLockReset size={23} /></ListItemIcon>
                        <ListItemText sx={sidebarText}>Update Password</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={removeItem}>
                        <ListItemIcon sx={iconStyle}><MdExitToApp size={23} /></ListItemIcon>
                        <ListItemText sx={sidebarText}>Log-Out</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default SideBar;
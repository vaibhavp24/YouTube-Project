import React from "react";
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { MdExitToApp, MdHistory, MdLockReset, MdHome, MdLibraryBooks, MdThumbUp } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LockResetIcon from '@mui/icons-material/LockReset';

const SideBar = ({ setAuth, isOpen }) => {
    const [hide, setHide] = useState(false)
    const [LikedVideos, setLikedVideos] = useState([]);
    const [showCardlist, setShowCardlist] = useState(true)
    const navigate = useNavigate()

    const removeItem = () => {
        localStorage.removeItem('user-info')
        setAuth(false)
    }
    return (
        <Stack
            direction="row"
            sx={{
                pt: '10vh',
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
                margin:'-1vh'
            }}
        >
            <List sx={{ p: 0 }}>
                <ListItem disablePadding>
                    <ListItemButton>
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
                    {/* <Link to={LikedVideos ? `/watchlater` : 'loading...'}> */}
                    <ListItemButton onClick={() => navigate('/liked')}>
                        <ListItemIcon><MdThumbUp color="white" size={23} /></ListItemIcon>
                        <ListItemText>Liked Videos</ListItemText>
                    </ListItemButton>
                    {/* </Link> */}
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><MdHistory color="white" size={23} /></ListItemIcon>
                        <ListItemText>History</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    {/* <Link to={'/updatepass'}> */}
                    <ListItemButton onClick={() => navigate('/updatepass')}>
                        <ListItemIcon><MdLockReset color="white" size={23} /></ListItemIcon>
                        <ListItemText>Update Password</ListItemText>
                    </ListItemButton>
                    {/* </Link> */}
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={removeItem}
                    >
                        <ListItemIcon><MdExitToApp color="white" size={23} /></ListItemIcon>
                        <ListItemText>Log-Out</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Stack>
    )
}

export default SideBar;
import React from "react";
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdThumbUp } from 'react-icons/md'
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
            }}
        >
            <List sx={{ p: 0 }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><MdHome size={23} /></ListItemIcon>
                        <ListItemText>HOME</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/subscription')}>
                        <ListItemIcon><MdHome size={23} /></ListItemIcon>
                        <ListItemText>SUBSCRIPTION</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    {/* <Link to={LikedVideos ? `/watchlater` : 'loading...'}> */}
                    <ListItemButton onClick={() => navigate('/liked')}>
                        <ListItemIcon><MdThumbUp size={23} /></ListItemIcon>
                        <ListItemText>Liked Videos</ListItemText>
                    </ListItemButton>
                    {/* </Link> */}
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><MdHistory size={23} /></ListItemIcon>
                        <ListItemText>HISTORY</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    {/* <Link to={'/updatepass'}> */}
                    <ListItemButton onClick={() => navigate('/updatepass')}>
                        <ListItemIcon><LockResetIcon size={23} /></ListItemIcon>
                        <ListItemText>UPDATE PASSWORD</ListItemText>
                    </ListItemButton>
                    {/* </Link> */}
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={removeItem}
                    >
                        <ListItemIcon><MdExitToApp size={23} /></ListItemIcon>
                        <ListItemText>LOGOUT</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Stack>
    )
}

export default SideBar;
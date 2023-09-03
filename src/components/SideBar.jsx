import React from "react";
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdThumbUp } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LockResetIcon from '@mui/icons-material/LockReset';

// import { categories } from "../utils/constants";

const SideBar = ({ setAuth, isOpen }) => {
    const [hide, setHide] = useState(false)
    const [LikedVideos, setLikedVideos] = useState([]);
    const [showCardlist, setShowCardlist] = useState(true)
    const navigate = useNavigate()

    const loadLikeVideo = (e) => {
        e.preventDefault()
        const projectID = 'f104bi07c490';
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ott/watchlist/like';

        const headers = {
            projectID
        };
        axios.get(apiUrl, { headers })
            .then(response => {
                console.log('line 65', response);
                if (response.status === 200) {
                    setLikedVideos(response.data.data)
                } else {
                    console.log(`Request failed with status code: ${response.status}`);
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
        console.log(LikedVideos);
    }
    const sideBarWidth = isOpen ? '250px' : '70px'

    const removeItem = () => {
        localStorage.removeItem('user-info')
        setAuth(false)
    }
    return (
        <Stack
            direction="row"
            sx={{

                // position: 'fixed',
                // width: { xs: '0', md: 'auto' },
                // width: sideBarWidth,
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
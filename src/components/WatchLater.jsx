import { Box, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Videos from './Videos';
import { useEffect } from 'react';
import { watchBox, watchInnerBox } from '../styles/WatchLaterStyle';

/* watchlater component is made to show user's liked videos */

const WatchLater = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const projectID = 'f104bi07c490';
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ott/watchlist/like';

        const token = JSON.parse(localStorage.getItem('user-info')).token

        const headers = {
            'Authorization': 'Bearer ' + token,
            'projectID': projectID
        };
        axios.get(apiUrl, { headers })
            .then(response => {
                if (response.status === 200) {
                    setApiData(response.data.data.shows)
                } else {
                    console.log(`Request failed with status code: ${response.status}`);
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }, [])

    return (
        // <>
        <Box sx={watchBox}>
            <Typography variant='h4' pb='-200vh' pl={2} sx={{ color: "#fff" }}>Watch Later Videos</Typography>
            <Box component='div' sx={watchInnerBox}>
                <Videos apiData={apiData} />
            </Box>
        </Box>
        // </>
    )
}

export default WatchLater
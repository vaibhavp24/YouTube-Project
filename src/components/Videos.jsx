import React from 'react'
import { Stack, Box, Grid } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import VideoCard from './VideoCard';

/* videos component is used to map the video data into video card */
const Videos = ({ apiData }) => {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
                {apiData.map((item, idx) => (
                    <Grid key={idx} item xs={12} sm={6} md={4} lg={4}>
                        <Box>
                            {item._id && <VideoCard video={item} />}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Videos
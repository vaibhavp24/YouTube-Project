import React from 'react'
import { Stack, Box, Grid } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import VideoCard from './VideoCard';

/* videos component is used to map the video data into video card */
const Videos = ({ apiData }) => {
    return (
        <Box display='flex' columnGap='10px' direction="row" overflow='hidden' flexWrap="wrap" justifyContent="start" alignItems="start" gap={1}>
            {apiData.map((item, idx) => (
                <Box key={idx}>
                    {item._id && <VideoCard video={item} />}
                </Box>
            ))}
        </Box>
    )
}

export default Videos
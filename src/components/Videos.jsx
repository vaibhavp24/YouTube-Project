import React from 'react'
import { Stack, Box } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ apiData }) => {
    console.log(apiData);
    return (
        <Stack direction="row" overflow='hidden' flexWrap="wrap" justifyContent="start" alignItems="start" gap={1}>
            {apiData.map((item, idx) => (
                // let vurl=apiData[idx]
                <Box key={idx}>
                    {item._id && <VideoCard video={item} />}
                    {/* {item._id && <ChannelCard channelDetail={item} />} */}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos
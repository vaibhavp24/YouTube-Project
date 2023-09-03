import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
// import { tabItems } from '../data/app.data'

const TabList = () => {
    const [Value] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box>
            <Tabs value={1} variant='scrollable'>
                <Tab label='All' />
                <Tab label='Music' />
                <Tab label='Live' />
                <Tab label='Dramedy' />
                <Tab label='Akshay Kumar' />
                <Tab label='Bollywood Music' />
                <Tab label='Trailers' />
                <Tab label='Meditation music' />
                <Tab label='Mantras' />
                <Tab label='News' />
                <Tab label='Tamil Cinema' />
                <Tab label='Vocals' />
                <Tab label='Conversation' />
                <Tab label='Pop Music' />
                <Tab label='Recently Updated' />
            </Tabs>
        </Box>
    )
}

export default TabList
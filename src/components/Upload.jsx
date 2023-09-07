import React from 'react'
import UseToggle from '../hooks/UseToggle'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import { Button } from '@mui/base'
import { uploadMenuItems } from '../data/app.data'
import { RiVideoUploadFill } from 'react-icons/ri'

/* this component is made just make this page to 
 look like original website this page does not have any functionalities */

const Upload = () => {
    const { el, open, handleClick, handleClose } = UseToggle()
    return (
        <Box sx={{ p: 1, color: '#616161', cursor: 'pointer' }}>
            <RiVideoUploadFill onClick={handleClick} size={24} />
            <Menu
                id='basic-upload-menu'
                anchorEl={el}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": 'basic-upload-button'
                }}
            >
                {uploadMenuItems.map((item) => {
                    return (
                        <MenuItem key={item.id} onClick={handleClose} >
                            {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
                            <Typography sx={{ textAlign: 'center', width: '100%' }} component="span">{item.text}</Typography>
                        </MenuItem>
                    )
                })}
            </Menu>
        </Box>
    )
}

export default Upload
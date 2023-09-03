import React from 'react'
import UseToggle from '../hooks/UseToggle'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import { Button } from '@mui/base'
import { uploadMenuItems } from '../data/app.data'
import { RiVideoUploadFill } from 'react-icons/ri'

const Upload = () => {
    const { el, open, handleClick, handleClose } = UseToggle()
    return (
        <Box sx={{ p: 1, color: '#616161', cursor: 'pointer' }}>
            {/* <Button id='basic-upload-button' > */}
            <RiVideoUploadFill onClick={handleClick} size={24} />
            {/* </Button> */}
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
                                // 01.08.21
                        </MenuItem>
                    )
                })}
            </Menu>
        </Box>
    )
}

export default Upload
import React from 'react'
import UseToggle from '../hooks/UseToggle'
import { Avatar, Box, Button, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Menu, Typography } from '@mui/material'
import { BsBellFill } from 'react-icons/bs'
import { inlineText, notificationWrapper } from '../styles/styles'
import { notificationData } from '../data/app.data'

const NotificationsList = () => {
    const { el, open, handleClick, handleClose } = UseToggle()
    return (
        <Box sx={{ px: 1 }}>
            <Button id='basic-button' onClick={handleClick}>
                <BsBellFill size={24} />
            </Button>
            <Menu
                id='basic-notification-menu'
                anchorEl={el}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": 'basic-notification-menu'
                }}
            >
                <List sx={notificationWrapper}>
                    {notificationData.map(item => {
                        return (
                            <Link href={item.url} key={item.id} underline='none'>
                                <ListItem sx={{ pt: 0, pb: 1, mt: '1' }} alignItems='flex-start'>
                                    <ListItemAvatar>
                                        <Avatar alt={item.alt} src={item.avatar} />
                                    </ListItemAvatar>
                                    <ListItemText primary={item.text} secondary={
                                        <>
                                            <Box component='span' sx={{ mt: 2 }}>
                                                <Typography sx={inlineText} component="span">
                                                    {item.time}
                                                </Typography>
                                            </Box>
                                        </>
                                    }
                                    >
                                    </ListItemText>
                                </ListItem>
                                {
                                    notificationData.length !== item.id && (
                                        <Divider variant='inset' component='li' />
                                    )
                                }
                            </Link>
                        )
                    })}
                </List>
            </Menu>
        </Box>
    )
}

export default NotificationsList
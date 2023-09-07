import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* this component is made to design each video card
 in each card there is thumbnail , title and description
 if the user clicks on any of the card it will redirect 
 to watch that particular video */

const VideoCard = ({ video }) => {
    const image = video.thumbnail
    const videoId = video._id
    const title = video.title
    const description = video.description

    return (
        <Card sx={{ width: { md: '400px', xs: '150%' }, backgroundColor: 'black', boxShadow: 'none', borderRadius: 'none' }}>
            <Link to={videoId ? `/video/${videoId}` : image}>
                <CardMedia
                    image={image}
                    alt={title}
                    sx={{ width: '100%', height: 200, backgroundColor: 'black' }}
                />
                <CardContent sx={{ color: '#fff', scrollbarWidth: 'none', height: '10vh' }} >
                    <Link to={videoId ? `/video/${videoId}` : image}>
                        <Typography variant='subtitle1' fontWeight='bold' color='#fff' >
                            {title.slice(0, 25)}
                        </Typography>
                        <Typography variant='subtitle2' color='#fff' sx={{ textDecoration: 'none' }}>
                            {description.slice(0, 25)}
                            <CheckCircleIcon sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard
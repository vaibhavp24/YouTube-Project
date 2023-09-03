import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({ video }) => {
    const image = video.thumbnail
    const videoId = video._id
    const videoUrl = video.video_url
    const title = video.title
    const description = video.description

    return (
        <Card sx={{ width: { md: '390px', xs: '100%' }, boxShadow: 'none', borderRadius: 'none' }}>
            <Link to={videoId ? `/video/${videoId}` : image}>
                <CardMedia
                    image={image}
                    alt={title}
                    sx={{ width: 360, height: 200 }}
                />
                <CardContent sx={{ backgroundColor: '#fff', scrollbarWidth: 'none', height: '100px' }} >
                    <Link to={videoId ? `/video/${videoId}` : image}>
                        <Typography variant='subtitle1' fontWeight='bold' color='#1e1e1e' >
                            {title.slice(0, 25)}
                        </Typography>
                        <Typography variant='subtitle2' color='gray' sx={{ textDecoration: 'none' }}>
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
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const VideoDetail = () => {

  const [showCardlist, setShowCardlist] = useState(true)
  let [videourl, setVideourl] = useState('')
  let [iconColor, setIconColor] = useState('black');
  const [likeVideoData, setLikeVideoData] = useState([])

  const location = useLocation()
  const trimText = location.pathname.substring(7)
  useEffect(() => {
    const projectID = 'f104bi07c490';
    const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show/${trimText}`;

    const headers = {
      projectID
    };
    axios.get(apiUrl, { headers })
      .then(response => {
        if (response.status === 200) {
          setVideourl(response.data.data)
        } else {
          console.log(`Request failed with status code: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }, []);
  const token = JSON.parse(localStorage.getItem('user-info')).token
  const likeVideo = () => {
    const projectID = 'f104bi07c490';
    const apiUrl = 'https://academics.newtonschool.co/api/v1/ott/watchlist/like';
    const headers = {
      'Authorization': 'Bearer ' + token,
      'projectID': projectID
    };
    const body = {
      "showId": trimText
    }
    axios.patch(apiUrl, body, { headers })
      .then(response => {
        if (response.status === 200) {
          setLikeVideoData(response.data.data.shows)
        } else {
          console.log(`Request failed with status code: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }

  const handleClick = () => {
    const newColor = iconColor === 'black' ? 'blue' : 'black';
    likeVideo()
    setIconColor(newColor);
  }


  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} pt='12%' width='25%' pl='65%' justifyContent='center' >
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer playing='true' controls url={videourl.video_url} />
            <Typography color='#1e1e1e' variant='h5' fontWeight='bold'>
              {videourl.title}
            </Typography>
            <Typography color='#1e1e1e' variant='body2' fontWeight='bold'>
            </Typography>
            <Stack direction='row' justifyContent='space-between'>
              <Typography variant='body1' sx={{ opacity: 0.7 }} color={iconColor}>
                <ThumbUpIcon sx={{ cursor: 'pointer' }} onClick={() => handleClick()} />
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
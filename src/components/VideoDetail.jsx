import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { box } from '../styles/VideoDetailStyle';

/* from this component the user can watch the video 
 and video details i.e title , description and also like 
the video so that it can be watched later from the liked videos section */

const VideoDetail = () => {

  let [videourl, setVideourl] = useState('')
  let [iconColor, setIconColor] = useState('white');
  const [likeVideoData, setLikeVideoData] = useState([])

  /* extracting the video id from tha path
   and passing the id in the api watch the video */

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
  }, [trimText]);
  const token = JSON.parse(localStorage.getItem('user-info')).token

  /* this below likeVideo function is call when the 
   user clicks on the like button */

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

  /* handleClick funciton is used to change the color of the like button */

  const handleClick = () => {
    const newColor = iconColor === 'white' ? 'blue' : 'white';
    likeVideo()
    setIconColor(newColor);
  }


  return (
    <Box sx={box}>
      <ReactPlayer playing controls url={videourl.video_url} />
      <Typography variant='h5' fontWeight='bold' >
        {videourl.title}
      </Typography>

      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='body1' sx={{ opacity: 0.7 }} color={iconColor}>
          <ThumbUpIcon sx={{ cursor: 'pointer' }} onClick={() => handleClick()} />
        </Typography>
      </Stack>
    </Box>
  )
}

export default VideoDetail
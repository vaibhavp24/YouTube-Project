import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import axios from 'axios'
import { div, main } from "../styles/FeedStyle";

const Feed = ({ setAuth, isOpen }) => {
  const [hide, setHide] = useState(false)
  const [apiData, setApiData] = useState([]);
  const [showCardlist, setShowCardlist] = useState(true)

  useEffect(() => {
    const projectID = 'f104bi07c490';
    const apiUrl = 'https://academics.newtonschool.co/api/v1/ott/show';

    const headers = {
      projectID
    };

    /* here axios.get is used to get data of videos from api  
     and storing them into apiData and passing them as props in Videos components */

    axios.get(apiUrl, { headers })
      .then(response => {
        if (response.status === 200) {
          /* storing videos data if response is success */
          setApiData(response.data.data)
        } else {
          /* if not consoling the error*/
          console.log(`Request failed with status code: ${response.status}`);
        }
      })
      .catch(error => {
        /* if error occured from api it will show error through this */
        console.error('An error occurred:', error);
      });
  }, []);

  /* Feed component contains all sidebar and video cards */

  return (
    <Box component='main' sx={main}>
      <Box component='div'
        sx={div}>
        <SideBar setAuth={setAuth} />
      </Box>

      <Box component='div' sx={{
        p: 1,
        overflowY: 'auto',
        width: { xs: '90%' }
      }}>
        <Videos apiData={apiData} />
      </Box>
    </Box>
  );
};

export default Feed;
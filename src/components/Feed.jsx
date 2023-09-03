import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import axios from 'axios'

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
    axios.get(apiUrl, { headers })
      .then(response => {
        if (response.status === 200) {
          setApiData(response.data.data)
        } else {
          console.log(`Request failed with status code: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "95vh" }, px: { sx: 0, md: 2 } }}>

        <SideBar setAuth={setAuth} isOpen={isOpen} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "white", }}>
          Copyright © Vaibhav Padole
        </Typography>
      </Box>

      <Box sx={{ pt: { xs: 0, md: 10, lg: 10 }, overflowY: "auto", height: "90vh", flex: 2 }}>
        <Videos apiData={apiData} />
      </Box>
    </Stack>
  );
};

export default Feed;
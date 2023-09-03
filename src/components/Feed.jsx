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
        console.log('line 65', response);
        if (response.status === 200) {
          // console.log('vid ',response.data.data[0]);
          setApiData(response.data.data)
        } else {
          console.log(`Request failed with status code: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    console.log(apiData.length);
  }, []);
  console.log(apiData);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "95vh" }, px: { sx: 0, md: 2 } }}>

        <SideBar setAuth={setAuth} isOpen={isOpen} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "white", }}>
          Copyright © Vaibhav Padole
        </Typography>
      </Box>

      <Box sx={{ pt: { xs: 0, md: 10, lg: 10 }, overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}></span>
        </Typography> */}
        {/* 01.50.30 */}
        <Videos apiData={apiData} />
      </Box>
    </Stack>
  );
};

export default Feed;
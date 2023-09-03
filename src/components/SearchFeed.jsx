import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import axios from 'axios'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const [hide, setHide] = useState(false)
  const [apiData, setApiData] = useState([]);
  const [showCardlist, setShowCardlist] = useState(true)
  const { searchTerm } = useParams()

  useEffect(() => {
    const projectID = 'f104bi07c490';
    const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type":"${searchTerm}"}`;

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
    <Box pt={10} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span style={{ color: "#FC1503" }}>Search Results for: {searchTerm} Videos</span>
      </Typography>
      <Videos apiData={apiData} />
    </Box>
  );
};

export default SearchFeed;
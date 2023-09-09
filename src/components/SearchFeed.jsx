import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { searchBox } from "../styles/SearchFeedStyle";

/* this component is made to show after user search for any videos or filtered videos */

const SearchFeed = () => {
  const [apiData, setApiData] = useState([]);
  const { searchTerm, field } = useParams()

  console.log(searchTerm);
  useEffect(() => {
    const projectID = 'f104bi07c490';
    const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"${field}":"${searchTerm}"}`;

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
  }, [searchTerm]);

  return (
    <Box sx={searchBox}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span style={{ color: "#FC1503" }}>Search Results for: {searchTerm} Videos</span>
      </Typography>
      {<Videos apiData={apiData} />}
    </Box>
  );
};

export default SearchFeed;
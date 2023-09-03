import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const ApiData = () => {
  const [apiData, setApiData] = useState([])
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
          setApiData(response.data.data)
          console.log(apiData);
        } else {
          console.log(`Request failed with status code: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    console.log(apiData);
  }, []);
  console.log(apiData);
  return apiData
}

export default ApiData
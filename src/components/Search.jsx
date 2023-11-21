import { Box, Button, FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { flexAlignCenter, searchBar } from '../styles/styles';
import { iconButton, select } from '../styles/SearchStyle';


/* Search Component is made to set the search term and type of 
field for filtering the videos while searching */

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    /* after getting searching term and field navigating to filtered videos */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/type/${searchTerm}`);
            setSearchTerm('');
        }
    };


    const [field, setField] = useState('type');
    const handleChange = (event) => {
        setField(event.target.value);
    };

    return (
        <Box sx={flexAlignCenter}>
            <Paper component="form" sx={searchBar} onSubmit={handleSubmit}>
                {/* setting searching term on input type */}
                <InputBase value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{ ml: 1, flex: 1, pl: 1, color: 'white' }} placeholder='Search' />
                <IconButton
                    type='button'
                    sx={iconButton}
                    aria-label='search'
                    onClick={handleSubmit}
                >
                    <SearchIcon />
                </IconButton >
            </Paper>
        </Box>
    )
}


export default Search
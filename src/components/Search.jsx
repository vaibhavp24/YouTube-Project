import { Box, Button, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import { BsFillMicFill } from "react-icons/bs";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { flexAlignCenter, searchBar } from '../styles/styles';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            console.log(searchTerm);
            setSearchTerm('');
        }
    };

    return (
        <Box sx={flexAlignCenter}>
            <Paper component="form" sx={searchBar} onSubmit={handleSubmit}>
                <InputBase value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{ ml: 1, flex: 1, pl: 1 }} placeholder='Search' />
                <IconButton
                    type='button'
                    sx={{
                        backgroundColor: '#eee',
                        // borderRadius: 0
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5
                    }}
                    aria-label='search'
                    onClick={handleSubmit}
                >
                    <SearchIcon />
                </IconButton >
            </Paper>
            <Button sx={{ minWidth: 'auto' }} >
                <BsFillMicFill size={20} />
            </Button>
        </Box>
    )
}


export default Search
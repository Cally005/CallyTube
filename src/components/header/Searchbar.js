import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';

const Searchbar = () => {
const [ searchTerm, setSearchTerm] = useState('')

const navigate = useNavigate()

const handleSubmit = (e) => {

  e.preventDefault();

  if(searchTerm){

    navigate(`/search/${searchTerm}`);

    searchTerm('')
  }
}

  return (
    <Paper
      component='form'
      onSubmit ={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 5,
        ml: 55,
        boxShadow: 'none',
        mr: { sm: 5 },
        fontColor:'red'
      }} >

<input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        typeof='text'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search/>
      </IconButton> 
    
      </Paper>
  )
}

export default Searchbar
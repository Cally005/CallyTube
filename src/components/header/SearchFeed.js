import { useEffect, useState } from 'react'
// import Sidebar from './Sidebar/Sidebar'
import { Box, Typography } from "@mui/material";

//  import { Video, Homescreen, LoginSceen, Searchbar } from './components';
// import {fetchAPI} from '../utilis/fetchAPI'
import Video from '../Video/Video';
import { fetchAPI } from '../../utilis/fetchAPI';
import { useParams } from 'react-router';



const SearchFeed = () => {
    const { searchTerm} = useParams()
  const [ videos, setVideos] = useState([]);

useEffect (()  => {
fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
}, [searchTerm]);



  return (
    <Box p={3} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "red" }}>
     Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
    </Typography>

     <Video videos={videos}/>
  </Box>
  )
}

export default SearchFeed
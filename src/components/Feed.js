import { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Box, Stack, Typography } from "@mui/material";
import Video from './Video/Video';
//  import { Video, Homescreen, LoginSceen, Searchbar } from './components';
import {fetchAPI} from '../utilis/fetchAPI'



const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Recommended Videos')
  const [ videos, setVideos] = useState([])

useEffect (()  => {
fetchAPI(`search?part=id,snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
}, [selectedCategory]);



  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{ height: { sx: "auto", md: "90vh" }, px: { sx: 1, md: 1 } }}>
      

      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: 'red', }}>
        Copyright © 2022 JSM Media
      </Typography>
    </Box>

 <Box p={3} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          <span style={{ color: "#FC1503" }}> {selectedCategory}</span>
        </Typography>

         <Video videos={videos}/>
      </Box>
    
  </Stack>
  )
}

export default Feed
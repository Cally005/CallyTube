import  { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchAPI } from '../../utilis/fetchAPI';
import ChannelCard from './ChannelCard';
import { Video } from '..';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);
  
    const { id } = useParams();
  
    useEffect(() => {
      const fetchResults = async () => {
        const data = await fetchAPI(`channels?part=snippet&id=${id}`);
  
        setChannelDetail(data?.items[0]);
  
        const videosData = await fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
  
        setVideos(videosData?.items);
      };
  
      fetchResults();
    }, [id]);
  
    return (
      <Box minHeight="95vh">
        <Box>
          <div style={{
            height:'250px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 5,
          }} />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />

        </Box>
        <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Video videos={videos} />
        </Box>
      </Box>
    );
  };
export default ChannelDetail
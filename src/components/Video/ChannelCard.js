import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../../utilis/Constants';
// import demoProfilePicture from '.../utilis/Constants'

// import VideoCard from "./VideoCard";
// import "./Recommendedvidoes.css"

function ChannelCard ({ channelDetail, marginTop }) {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'black', fontWeight:'bold' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '200px', width: '180px', mb: 1, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '20px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'black' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);
        
}

export default ChannelCard 



{/* <div className='recommendedvideos'>
<h2>Recommended</h2>
    <div className='recommendedvideos__videos'>
                <VideoCard
                title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"

                />
                <VideoCard 
                  title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                  
                />
                <VideoCard 
                  title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                  
                />
                <VideoCard
                title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                   />
                <VideoCard 
                  title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                  
                />
                <VideoCard 
                  title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                  
                />
                <VideoCard
                title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url ="https://www.youtube.com/embed/FWz7VW1cDcU?si=6JdRLcRSvSxB6rj5" 
                   />
                <VideoCard 
                  title="Nature in Focus: Giant Sequoia"
                views="2.45M views"
                timestamp="2 days ago"
                channelImage="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                channel="Sonny Sangha"
                url="https://i.ytimg.com/an_webp/2SXno61FX2k/mqdefault_6s.webp?du=3000&sqp=CIaX1awG&rs=AOn4CLCnlPmNKxEDwjoo3jbenMWilQj-_A"
                  
                />

    </div>
 </div> */}
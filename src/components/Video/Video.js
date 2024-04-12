import React from 'react'
// import './_video.scss'



import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Stack, Box} from '@mui/material';
import ChannelCard from './ChannelCard';
import { VideoCard } from '..';



const Video = ({videos, direction }) => {
  if(!videos?.length) return 'loading...';
  return (

    <Stack direction= {direction || 'row' }  flexWrap="wrap" justifyContent="start"
    gap={2}>
     {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
       </Stack>



//     <div className='video'>
//       <div className="video__top">
// <img src='https://i.ytimg.com/vi/_1HGZ_9aRhI/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AewJgALQBYoCDAgAEAEYEyBPKH8wDw==&rs=AOn4CLBg4JLWsiFUOYXk4xOyiRxkAXj_LA' alt=''/>
// <span>05:43</span>
 
//       <div className="video__title">
//         create app in 5 mintuea made by callsitus 
//       </div>
//       <div className="video__details">
//         <span>
//       <RemoveRedEyeIcon /> 10m views •

//         </span>
//         <span>5 days ago</span>
//       </div>
//       <div className="video__channel">
//       <img src='https://yt3.ggpht.com/eQWclJ16zZQ2G0unEEjYTBxEORa85TVyASXTX7wpkLeYxfaJ7RLCo1ElE0Up4Yst6eM2uAuPBQ=s68-c-k-c0x00ffffff-no-rj' alt=''/>
//       <p> callistus</p>

//       </div>
//     </div>

      )
}

export default Video
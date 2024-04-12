import React from 'react'
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Stack } from '@mui/material';
import { categories } from "../../utilis/Constants"
import "./_sidebar.scss";

const firstCategories = categories.slice(0, 3);
const secondCategories = categories.slice(4, 7);
const thirdCategories = categories.slice(8, 12);
const fourthCategories = categories.slice(12, 15);

const Sidebar = ( { selectedCategory, setSelectedCategory}) => (

<Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "110%" },
      flexDirection: { md: "column" },
    }}
  >

    {firstCategories.map((category) => (
        
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="category-btn-1"
        style={{ background: category.name === selectedCategory && 'lightgray'}}
        key = {category.name}
        >
        <span className='category-btn-1__icon'>{category.icon}</span>
        <hr></hr>
        <span className='category-btn-1__title'>{category.name}</span>
       </button> 
    ))}
   
    <hr></hr>
    <span  className="spa-1">For You</span>
    {secondCategories.map((category) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="category-btn-1"
        style={{ background: category.name === selectedCategory && 'lightgray'}}
        >
        <span className='category-btn-1__icon'>{category.icon}</span>
        <hr></hr>
        <span className='category-btn-1__title'>{category.name}</span>
       </button> 
    ))}
    <hr></hr>
    {thirdCategories.map((category) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="category-btn-1"
        style={{ background: category.name === selectedCategory && 'lightgray'}}
        >
        <span className='category-btn-1__icon'>{category.icon}</span>
        <hr></hr>
        <span className='category-btn-1__title'>{category.name}</span>
       </button> 
    ))}
    <hr></hr>
    {fourthCategories.map((category) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="category-btn-1"
        style={{ background: category.name === selectedCategory && 'lightgray'}}
        >
        <span className='category-btn-1__icon'>{category.icon}</span>
        <hr></hr>
        <span className='category-btn-1__title'>{category.name}</span>
       </button> 
    ))}
  </Stack>
)


    export default Sidebar;


















// const Sidebar= ({sidebar, handleToggleSidebar}) => {



//   return (
//     <nav className={sidebar?"sidebar open": 'sidebar'}
//     onClick={()=>handleToggleSidebar(false)}
//     >
    
//         <SidebarRow selected Icon={HomeIcon} title="Home" />
//         <SidebarRow  Icon={WhatshotIcon} title="Trending"/>
//         <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
//     <hr />
//     <SidebarRow Icon={VideoLibraryIcon} title="Libary" />
//     <SidebarRow  Icon={HistoryIcon} title="History"/>
//     <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
//     <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
//     <SidebarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
//     <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
//     <hr/>
//     </nav>

//   )
// }

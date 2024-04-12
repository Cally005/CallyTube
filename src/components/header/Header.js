import React from 'react';
// import './_header.scss';
// import VideoCallIcon  from '@mui/icons-material/VideoCall';
// import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
// import AppIcon from '@mui/icons-material/Apps';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MicIcon from '@mui/icons-material/Mic';
// import { Avatar } from '@mui/material';
// import Searchbar from './Searchbar';

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import Searchbar from './Searchbar';

const Header= () => (
  <Stack direction="row" alignItems="center" p={2} sx={{objectfit:"contain", display: "flex", position:  "sticky",  top: 0, }}>
    <Link to="/" style={{ display: "flex", alignItems: "center"}}>
     <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614' alt="logo" height={45} />
    </Link>
    <Searchbar />
  </Stack>
);









// const Header = ({handleToggleSidebar}) => {


//   return (
//     <div className='header'>
//         <div className="header__left">
//         <MenuIcon  className="header__menu" 
//         size={26}
//         onClick={() => handleToggleSidebar ()}
//          />
//         <img 
//         className='header__logo'
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614' 
//         alt='' />
//         </div> 

//         <Searchbar/>

//          <div className='header__input'> 
//         <form>
//         <input placeholder="Search" type="text"/>
//         <button type='submit'>
//         <SearchIcon className='header__inputButton' size={22} />
//         </button>
//         </form>
//         </div>
        
       

//         <div className="header__icons"> 
       
//         <VideoCallIcon className="header__icon" />
//         <AppIcon className="header__icon" />
//         <NotificationsIcon className="header__icon" size={28}/>
//         <Avatar className='header__icon-1'
//           alt='cally'
//           src="https://appclick.ng/portal/uploads/student_images/123.jpg?1704035821?1704035821"
//           />
//     </div>
//     </div>
//   )
// } 

export default Header
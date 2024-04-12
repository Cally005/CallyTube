import React, { useState } from 'react';
import './_app.scss';
import { Container } from 'react-bootstrap'
import { Header, Homescreen, LoginScreen, Sidebar, Feed, Searchbar, ChannelCard, SearchFeed } from './components';
// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
// import  ChannelCard from './components/Video/ChannelCard ';
// import Homescreen from './components/Screen/Homescreen';
// import LoginScreen from './components/Screen/LoginScreen';
import {BrowserRouter as Router, Route, Routes, Switch, BrowserRouter} from 'react-router-dom'
import { Box } from '@mui/material';
import ChannelDetail from './components/Video/ChannelDetail';
import VideoDetail from './components/Video/VideoDetail';


// const Layout = ({children}) => {

//   const[sidebar, toggleSidebar] = useState(false)

//   const handleToggleSidebar =  () => toggleSidebar(value => !value)

//   return (
//     <div className='app'>
//       <Header  handleToggleSidebar={handleToggleSidebar}/>
//       <div className="app__container ">
//          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
//         <Container fluid className="app__main ">
//         {children}
//         {/* <Recommendedvidoes /> */}
//          </Container>
        
//     </div>

//   </div>

//   )
//   }

const App = () => {

  return (

    <BrowserRouter>
    <Box >
    <Header/>
    <Routes>
  
    <Route exact element = { <Feed/>} path='/'></Route>
    <Route element = { <VideoDetail/>} path='/Video/:id'></Route>
    <Route  element={  <Homescreen/> } path='*'></Route>
    <Route element = { <ChannelDetail/>} path='/channel/:id'></Route>
    <Route  element={<SearchFeed/>} path='/search/:searchTerm'></Route>
    <Route  element={  <Homescreen/> } path='*'></Route>
          {/* <h1>serach results</h1> */}
          
  
    
  </Routes>
  </Box>
  </BrowserRouter>

     )
  
}

export default App

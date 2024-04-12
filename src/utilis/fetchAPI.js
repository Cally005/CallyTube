
 import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {

'X-RapidAPI-Key': '422d5c2adamsha9b6b80f1ce3b23p19625djsnb52bf98ebbe3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}; 
  export const fetchAPI  = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  }




















// import axios from 'axios'

// const VidUrl = 'https://youtube-v311.p.rapidapi.com' 

// const options = {

//     url: VidUrl,
//     params: {
//       part: 'snippet,contentDetails,statistics',
//       id: 'Q8TXgCzxEnw',
//       maxResults: '10'
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_PRIVATE_KEY,
//       'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
//     }
//   };


  
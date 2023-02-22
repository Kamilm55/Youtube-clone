import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50',
    //   order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '3a9788ded8mshc1af8b4d78e0636p107c1ajsn9d00af8b351a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  export const fetchFromApi = async (url:string) => {
   const response = await axios.get(`${BASE_URL}/${url}` , options)
   if(!response.data.error)
   return response.data.items;
   else
   return response.data.error;
} 


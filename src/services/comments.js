import axios from 'axios';

export const getComments = async () => {
    const response = await axios.get('https://raw.githubusercontent.com/alifdes/comments/main/public/data.json');
    return response.data;
  };
  

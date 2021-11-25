import axios from 'axios';

export const getGoods = async () => {
  const response = await axios.get('http://localhost:4000/goods');
  
  return response.data;
}

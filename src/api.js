import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';


export const getGoods = async () => {
  const response = await axios.get('/goods');
  
  return response.data;
}

export const getGood = async (id) => {
  const response = await axios.get(`/goods/${id}`);
  
  return response.data;
}

export const addGood = async ({ title, categoryId }) => {
  const response = await axios.post(`/goods`, { title, categoryId });
  
  return response.data;
}

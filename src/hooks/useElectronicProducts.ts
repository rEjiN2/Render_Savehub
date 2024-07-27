import { useQuery } from 'react-query';
import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const useElectronicsProducts = () => {
  return useQuery('electronicsProducts', async () => {
    const { data } = await axios.get('/api/getElectronicsApi',{
      headers: {
        'Content-Type':"application/json",
        'x-api-key':process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    return data;
  });
};

export default useElectronicsProducts;

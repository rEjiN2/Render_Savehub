import { useQuery } from 'react-query';
import axios from 'axios';

const useWomenProducts = () => {
  return useQuery('womenProducts', async () => {
    const { data } = await axios.get('/api/getWomenClothing',{
      headers: {
        'Content-Type':"application/json",
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    return data;
  });
};

export default useWomenProducts;

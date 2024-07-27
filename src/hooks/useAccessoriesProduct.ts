import { useQuery } from 'react-query';
import axios from 'axios';

const useAccessoriesProducts = () => {
  return useQuery('accessoriesProducts', async () => {
    const { data } = await axios.get('/api/getAccessoriesApi',{
      headers: {
        'Content-Type':"application/json",
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    return data;
  });
};

export default useAccessoriesProducts;

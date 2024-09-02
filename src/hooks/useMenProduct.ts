import { useQuery } from 'react-query';
import axios from 'axios';

const useMenProducts = (category: any) => {
  return useQuery(['products', category], async () => {
    const { data } = await axios.get(`/api/getMenClothing?category=${category}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
      }
    });
    return data;
  });
};

export default useMenProducts;

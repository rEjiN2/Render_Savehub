"use client"
import { useQuery } from 'react-query';
import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const useDiscountedProducts = () => {
  return useQuery('discountedProducts', async () => {
    const { data } = await axios.get('/api/getTodaysOffer', {
      headers: {
        'Content-Type':"application/json",
        'x-api-key': API_KEY,
      }
    });
    return data;
  });
};

export default useDiscountedProducts;

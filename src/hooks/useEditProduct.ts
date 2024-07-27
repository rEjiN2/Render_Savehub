import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const editProduct = async (product: any) => {
  const { data } = await axios.put('/api/editProduct', product,{
    headers: {
      'Content-Type':"application/json",
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    }
  });
  return data;
};

const useEditProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(editProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

export default useEditProduct;

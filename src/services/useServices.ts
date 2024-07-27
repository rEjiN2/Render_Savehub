import axios from "axios";


class UseService {


 async getAllProduct(){
    const {data} = await axios.get('/api/getProductHub',{
      headers: {
        'Content-Type':"application/json",
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
      }
    })
    return data
 }

 async getProductById(params:any){
  const {data} = await axios.get(`/api/getProductById/${params.id}`,{
    headers: {
      'Content-Type':"application/json",
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    }
  });
  return data
 }
 async updateProduct(id:string, updatedProduct: any){
  const { data } = await axios.put(`/api/updateProduct/${id}`, updatedProduct, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return data
 }

 async deleteProduct(id: string) {
   const { data } = await axios.delete(`/api/deleteProductApi/${id}`,{
    headers: {
      'Content-Type':"application/json",
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    }
  });
   return data;
 }
}





export default new UseService();
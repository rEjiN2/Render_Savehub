"use client"

import React from 'react'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const LoadingSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg h-[350px] w-full p-10 max-w-xs animate-pulse">
      <div className="flex justify-between p-4">
        <div className="bg-gray-300 h-6 w-20 rounded"></div>
        <div className="bg-gray-300 h-6 w-20 rounded"></div>
      </div>
      <div className="bg-gray-300 h-[248px] rounded-lg"></div>
    </div>
  );


interface Product {
    id:number;
    name:string;
    image: string;
    category:string;
    subcategory:string;
    price:number;
    discount:number;
    link:string;
}


const Offer = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };


  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
        };

        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (apiKey) {
          headers['x-api-key'] = apiKey;
        }
        const res = await fetch('/api/getTodaysOffer', {
          method: 'GET',
          headers: headers,
        });

        const response = await res.json();
        setProducts(response);
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, []);

  return (
    <div className="container pt-10 flex flex-wrap justify-center gap-4 w-full">
        
    {loading
            ? Array.from({ length: 5 }).map((_, index) => <LoadingSkeleton key={index} />)
            : products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg h-[350px] w-[200px] max-w-xs relative group">
                  <div className="flex justify-between">
                    <div className="price-tag z-50">₹ {product.price} </div>
                    <div className="price-tag z-50">{product.discount}% Off </div>
                  </div>
                  <Image
                    src={product.image}
                    alt="clothing"
                    // width={300} // Replace with actual width
                    // height={300} // Replace with actual height
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg h-[248px]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span className="text-white text-md text-center">{product.name}</span>
  </div>
                  <button onClick={() => handleClick(product.link)} className="bg-black w-full mt-6 p-3 rounded-md absolute text-white bottom-0 ">Buy Now</button>
                </div>
              ))}       
    </div>
  )
}

export default Offer
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
        const res = await fetch('/api/getTodaysOffer', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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
    <div className="container pt-10 flex flex-wrap justify-center gap-5 w-full">
        
    {loading
            ? Array.from({ length: 5 }).map((_, index) => <LoadingSkeleton key={index} />)
            : products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg h-[350px] w-full max-w-xs relative">
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
                    objectFit="cover"
                    className="rounded-lg h-[248px]"
                  />
                  <button onClick={() => handleClick(product.link)} className="bg-black w-full mt-6 p-3 rounded-md absolute text-white bottom-0 ">Buy Now</button>
                </div>
              ))}       
    </div>
  )
}

export default Offer
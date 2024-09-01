import Image from "next/image";
import Banner from '../../public/bannersave.jpg'
import Cloth from '../../public/clothing.jpg'
import Accessories from '../../public/access.jpg'
import Elecgtronics from '../../public/electronics.jpg'
import Link from "next/link";
import Offer from "@/components/Offer/Offer";





const LoadingSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg h-[350px] w-full p-10 max-w-xs animate-pulse">
      <div className="flex justify-between p-4">
        <div className="bg-gray-300 h-6 w-20 rounded"></div>
        <div className="bg-gray-300 h-6 w-20 rounded"></div>
      </div>
      <div className="bg-gray-300 h-[248px] rounded-lg"></div>
      <div className="bg-gray-300 h-12 mt-6 p-3 rounded-md"></div>
    </div>
  );


export default function Home() {

  

  return (
   
       <div className="container mx-auto pt-5">
      
       {/* Banner Section  */}
        <Image src={Banner} width={1440} height={300} alt="banner" style={{borderRadius:'25px',zIndex:99}} />
       
        {/* Collection */}
        <section className="pt-10 z-0">
        <h1 className="text-zinc-50 text-5xl text-center underline pt-10">Collections</h1>
        <div className="container mx-auto pt-10">
          <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg h-[350px] relative">
    <Image src={Cloth} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
        <Link href='/category/clothing'>
        <h1 className="text-white text-xl text-center bg-black bg-opacity-50 p-3 rounded cursor-pointer">Clothing</h1>
        </Link>
    </div>
</div>
<div className="bg-white p-6 rounded-lg shadow-lg h-[350px] relative">
    <Image src={Accessories} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
    <Link href='/category/accessories'>
        <h1 className="text-white text-xl text-center bg-black bg-opacity-50 p-3 rounded cursor-pointer">Accessories</h1>
    </Link>
    </div>
</div>
<div className="bg-white p-6 rounded-lg shadow-lg h-[350px] relative">
    <Image src={Elecgtronics} alt="clothing" objectFit="cover" layout="fill" className="rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
    <Link href='/category/electronics'>
        <h1 className="text-white text-xl text-center bg-black bg-opacity-50 p-3 rounded cursor-pointer">Electronics</h1>
    </Link>
    </div>
</div>
           
          </div>
                
        </div>
        </section>
           {/* Today's Offer */}
           <section className="pt-10">
    <h1 className="text-zinc-50 text-5xl text-center underline pt-10">Today&apos;s Best Offer</h1>
    <Offer/>
    </section>
       </div>
   
  );
}

"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/logo.png'
import { FaBars } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems,Transition  } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [categories,setCategories] = useState([])

  useEffect(()=>{
   const fetchCategories = async()=>{
    try{
      const fetCategories = await fetch('/api/getAllCategories',{
        method:"GET",
        headers:{
          'Content-Type':"application/json",
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
        }
      })

    const categoryList = await fetCategories.json()
    setCategories(categoryList);
    console.log(categoryList,"=====cat======");
    
      
    }catch(error){
    console.log(error);
    
    }
   }

   fetchCategories();
  },[])

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
   
   <div className='text-black bg-gray-50 h-20 rounded-2xl pl-5 flex items-center pr-3 relative'>
     <div className='basis-1/3'>
      <Link href='/'>
        <Image src={Logo} width={100} height={50} alt='img' style={{cursor:'pointer'}} />
      </Link>
     </div>
     <div className='basis-2/3  items-center justify-between pr-4 hidden md:flex'>
     <Menu>
          <Link href='/about'>
         <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
   About us</MenuButton>
   </Link>
          </Menu>
    <Menu>
      
           <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">

          Categories
          <ChevronDownIcon className="size-5 mt-1" />
          </MenuButton>
          <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          
        >
           <MenuItems
  anchor="bottom end"
  className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none z-10"
>
  {categories.map((category,index)=>{
    const [firstWord] = category.split(/[\s&\.]/);
    return(
      <MenuItem key={index}>
      <Link href={`/category/${firstWord}`}>
        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700">
         {firstWord}
        </button>
        </Link>
      </MenuItem>
  )})}
 
  {/* <MenuItem>
  <Link href='/clothing/womens'>
    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700">
      Women
    </button>
    </Link>
  </MenuItem> */}
</MenuItems>

         </Transition>
        </Menu>
        <Menu>
          <Link href='/faq'>
         <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
  FAQ</MenuButton>
   </Link>
          </Menu>
          <Menu>
          <Link href='/contactus'>
         <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
  Contact Us</MenuButton>
   </Link>
          </Menu>
     </div>
      <div className='md:hidden ml-auto'>
        <FaBars className='text-2xl cursor-pointer' onClick={() => {
          console.log(menuOpen,'open');
          setMenuOpen(!menuOpen)}} />
      </div>
      {menuOpen && (
         <div className='absolute top-full left-0 w-full bg-gray-50 rounded-b-2xl shadow-lg z-999 md:hidden' style={{zIndex:100}} >
         <div className='flex flex-col items-start p-4'>
           <div className='py-2 flex justify-between w-full'>
             <span>Category</span>
             <button onClick={toggleAccordion}>
               <svg className="h-5 w-5 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
               </svg>
             </button>
           </div>
           <div className={`pl-4 ${isOpen ? '' : 'hidden'}`} style={{zIndex:100}}>
           {categories.map((category,index)=>{
    const [firstWord] = category.split(/[\s&\.]/);
    return(
            <Link href={`/category/${firstWord}`}>
             <div onClick={closeMenu} className='py-2 cursor-pointer' style={{zIndex:100}}>{firstWord}</div>
             </Link>
  )})}

            
           </div>
           
           <Link href='/about'>
           <div onClick={closeMenu} className='py-2 cursor-pointer'>About us</div>
           </Link>
           <Link href='/faq'>
           <div onClick={closeMenu} className='py-2 cursor-pointer'>FAQ</div>
           </Link>
           <Link href='/contactus'>
           <div onClick={closeMenu} className='py-2 cursor-pointer'>Contact Us</div>
           </Link>
         </div>
       </div>
      )}
      
    </div>
    
  )
}

export default Navbar
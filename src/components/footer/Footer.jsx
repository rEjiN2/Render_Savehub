import React from 'react'
import Logo from '../../../public/savelogo.png'
import Image from 'next/image'
import Contact from '../../../public/contact.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-6 p-3 flex justify-between items-center bg-slate-50'>
           <div>
            <Image src={Logo} alt='SaveHub' width={70} />
           </div>
           <div className='hidden md:block'>© Developed by <span className="text-[#07b] font-bold text-lg">Rejin A</span></div>
       <Link href='/privacypolicy'>
           <h4 className='cursor-pointer'>Privacy Policy</h4>
       </Link>
     
       <>
           <div className='flex items-center cursor-pointer' >
         Connect - &nbsp;
         <Image src={Contact} alt='Connect' width={30} height={30} />
    </div>
       </>
    </div>
  )
}

export default Footer
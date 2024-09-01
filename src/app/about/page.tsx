import { Box } from '@mui/material'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='text-white flex items-center justify-center pt-10 flex-col'>
          <div className='text-3xl underline mt-16'>
            About Us
          </div>
    
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
            <div className='relative h-[1000px] w-screen container'>
              <div className='absolute top-5 left-36 right-10 h-[600px] w-[1000px] p-10 bg-gray-100 rounded-lg z-10'>
                <h1 className='text-slate-800 text-3xl text-center'>Welcome to <span className='text-purple-700'>OfferTag!</span></h1>
                <p className='text-slate-800 mt-10 text-center'>
                  OfferTag is an online shopping community dedicated to finding loot offers, online sales, and shopping deals. We provide the best discount coupons and promo codes from all major online shopping stores including Amazon India, Flipkart, Snapdeal, Myntra, Paytm, Jabong, Freecharge, and more.
                </p>
                <h2 className='text-slate-800 mt-10 text-2xl text-center'>What We Do</h2>
                <ul className='text-slate-800 list-disc pl-5 mt-2'>
                  <li>Track cheap and loot deals from all online shopping websites</li>
                  <li>Notify about deals in a wide variety of products</li>
                  <li>Keep track of best cashback offers from banks and wallets</li>
                </ul>
                <h2 className='text-slate-800 mt-10 text-2xl text-center'>Why Choose OfferTag?</h2>
                <ul className='text-slate-800 list-disc pl-5 mt-2'>
                  <li>We provide high-quality deals and offers</li>
                  <li>We respect user privacy and store no data related to your activity</li>
                  <li>We offer freebies to our customers as a token of gratitude</li>
                </ul>
              </div>
              <div className='absolute top-[200px] left-10 h-1/2 w-[1000px] bg-yellow-400 rounded-lg'></div>
            </div>
          </Box>
    
          <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}>
            <div className='w-screen flex items-center justify-center'>
              <div className='min-h-[300px] w-2/3 mt-10 bg-gray-100 rounded-lg z-10 p-5'>
                <h1 className='text-slate-800 text-3xl mt-10 text-center'>Welcome to <span className='text-purple-700'>OfferTag!</span></h1>
                <p className='text-slate-800 mt-2 text-center'>
                  OfferTag is an online shopping community dedicated to finding loot offers, online sales, and shopping deals. We provide the best discount coupons and promo codes from all major online shopping stores.
                </p>
                <h2 className='text-slate-800 mt-10 text-2xl text-center'>What We Do</h2>
                <ul className='text-slate-800 list-disc pl-5 mt-2'>
                  <li>Track cheap and loot deals from all online shopping websites</li>
                  <li>Notify about deals in a wide variety of products</li>
                  <li>Keep track of best cashback offers from banks and wallets</li>
                </ul>
              </div>
            </div>
            <div className='w-screen flex items-center justify-center mt-5'>
              <div className='w-2/3 min-h-48 bg-yellow-400 rounded-lg p-5'>
                <h2 className='text-gray-100 mt-5 text-2xl text-center'>Why Choose OfferTag?</h2>
                <ul className='text-gray-100 list-disc pl-5 mt-2'>
                  <li>We provide high-quality deals and offers</li>
                  <li>We respect user privacy and store no data related to your activity</li>
                  <li>We offer freebies to our customers as a token of gratitude</li>
                </ul>
                <p className='text-gray-100 mt-5 text-center'>
                  Join the OfferTag community today and start saving on your favorite products!
                </p>
              </div>
            </div>
          </Box>
        </div>
      );
}

export default AboutUs
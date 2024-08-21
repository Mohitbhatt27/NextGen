import React from 'react'
import logo1 from '../assets/logo1.png'
import app from '../assets/pay/app.jpg'
import play from '../assets/pay/play.jpg'
import pay from '../assets/pay/pay.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
  const navigate=useNavigate()
  
  const textVariants = {
    hidden: { opacity: 0, y:50},
    visible:{opacity: 1, y:0, transition:{duration:0.5,delay:0.3}}
  }

  return (
    <div id='footer' className='pt-2 sm:pt-4 pb-2 border-t border-gray-700 text-sm tracking-widest bg-gray-200'>
    <div className='ml-2 sm:ml-14 mb-2'>
      <img loading='lazy' className='w-8 mb-2  inline-block' src={logo1} alt="" /><span className='font-bold text-xl'>NextGen</span>
    </div>
    <motion.div initial='hidden' whileInView='visible' variants={textVariants} className='px-2 font-quicksand sm:px-16 grid grid-cols-3 sm:grid-cols-4 sm:pb-10 gap-2 sm:gap-5'>
      <div>
        <div>
          <p className='mb-1 text-base sm:text-lg font-bold'>Contact</p>
          <p className='text-sm'><span className='font-bold'>Address:</span> Wellington Road, Street 32, San Francisco</p>
          <p className='text-sm'><span className='font-bold'>Phone:</span> +01 2222 365 / (+91) 01 2345 6789</p>
          <p className='text-sm'><span className='font-bold'>Hours:</span> 10:00 - 18:00, Mon - Sat</p>
        </div>
      </div>
      <div>
        <p className='mb-1 text-base sm:text-lg font-bold'>About</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>About us</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>Delivery Information</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>Privacy Policy</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>Terms & Conditions</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>Contact Us</p>
      </div>
      <div className='hidden sm:block'>
        <p className='mb-1 text-base sm:text-lg font-bold'>My Account</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>Sign Up</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>View Cart</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>My Wishlist</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>Track my order</p>
        <p className='text-sm cursor-pointer hover:underline hover:text-blue-700'>Help</p>
      </div>
      <div>
      <p className='mb-1 text-base sm:text-lg font-bold'>Install App</p>
      <p className='text-sm'>From App Store or Google Play</p>
      <div className='-ml-5 sm:flex mix-blend-multiply'>
        <img loading='lazy' className='w-full cursor-pointer sm:w-1/2' src={app} alt="img" />
        <img loading='lazy' className='w-full cursor-pointer sm:w-1/2' src={play} alt="img" />
      </div>
      <img loading='lazy' className='mix-blend-multiply cursor-pointer sm:mt-2 sm:ml-2' src={pay} alt="" />
      </div>
    </motion.div>
    <div className='text-sm flex justify-center mb-1 mt-4 font-semibold'>
      All rights reserved. Copyright © 2024 - NextGen!
    </div>
    </div>
  )
}

export default Footer
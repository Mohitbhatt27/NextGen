import React from 'react'
import '../style.css'
import { motion } from 'framer-motion';

function Home() {

  const textVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1}
  }
  return (
    <div className='min-h-full background-container'>
      <div className='relative z-10 py-60 flex gap-2 flex-col justify-center px-20'>
        <motion.span initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='text-4xl font-bold text-white tracking-wider'>Welcome to <p className='inline-block text-green-400'>NextGen</p></motion.span>
        <motion.span initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.55,delay:0.5}} className='text-2xl font-semibold text-white tracking-wide'>Your Trusted Source for Premium Herbal Products</motion.span>
        <motion.span initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.55,delay:1}} className='text-lg w-2/3 text-white'>We believe in the power of nature to support your health and well-being. Our extensive range of herbal products is crafted with care, using only the finest ingredients sourced from around the world. Whether you're seeking remedies for everyday ailments or looking to enhance your overall vitality, we have the perfect natural solution for you.</motion.span>
        <motion.button initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.55,delay:1.5}} className='rounded-full border-2 border-white text-xl font-semibold hover:bg-green-500 text-white w-24 px-3 py-1 tracking-wide'>Explore</motion.button>
      </div>
    </div>
  )
}

export default Home
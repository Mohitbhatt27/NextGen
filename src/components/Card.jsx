import React from 'react'
import med from '../assets/med.jpeg'
import line from '../assets/icons/line.png'
import {easeIn, easeInOut, motion} from 'framer-motion'

function Card() {
  const textVariants = {
    hidden: { opacity: 0, scale:0},
    visible: { opacity: 1, scale:1}
  }

  return (
    <motion.div initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.4, ease:'easeInOut',delay:0.3}}>
    <div className='flex justify-center my-2 sm:my-10 mx-2 md:mx-10 lg:mx-20'>
      <div className='bg-green-500 rounded-l-md py-3 px-2 lg:pr-10 flex flex-col justify-center'>
        <div className='pl-2'>
          <img loading='lazy' className='w-7 pb-2 invert inline-block' src={line} alt="" />
          <span className='lg:pl-3 text-white text-2xl font-semibold'>Why choose us!</span>
        </div>
        <div className='flex'>
          <span className='text-white text-base sm:text-lg px-2 lg:px-10'>Our herbal products are crafted using only the finest natural ingredients. We source our herbs from trusted, sustainable farms that adhere to the highest standards of organic farming.<span className='hidden sm:inline'> This ensures that every product is pure, potent, and free from harmful chemicals.</span></span>
        </div>
      </div>
      <img loading='lazy' className='rounded-r-md object-cover inline-block w-48 md:w-96' src={med} alt="" />
    </div>
    </motion.div>
  )
}

export default Card
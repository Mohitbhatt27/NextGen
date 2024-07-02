import React from 'react'
import aelojuice from '../assets/aelojuice.jpeg'
import basil from '../assets/basil.jpeg'
import ginger from '../assets/ginger.jpeg'
import mint from '../assets/mint.jpeg'
import {motion} from 'framer-motion'

function Juice() {
  const textVariants = {
    hidden: { opacity: 0, y:-50},
    visible:{opacity: 1, y:0, transition:{staggerChildren:0.1}}
  }
  const heading ={
    hidden:{opacity:0,y:-50},
    visible:{opacity:1,y:0,transition:{delay:0.5, duration:0.5}}
  }
  const juice = [
    {
      title:'Aloe Vera',
      image:aelojuice,
      desc:'Aloe vera juice is made from the gel of the aloe vera plant. It is known for its soothing and hydrating properties, and it can aid in digestion, support immune function, and promote healthy skin.'
    },
    {
      title:'Ginger-Turmeric',
      image:ginger,
      desc:"Ginger and turmeric juice combines the anti-inflammatory and antioxidant properties of powerful roots."
    },
    {
      title:'Mint-Lemon',
      image:mint,
      desc:'Mint and lemon juice is a refreshing and cooling drink, perfect for hot weather. Mint aids in digestion and has a calming effect.'
    },
    {
      title:'Holy Basil',
      image:basil,
      desc:'Holy basil, also known as tulsi, is revered in Ayurvedic medicine for its adaptogenic properties. Tulsi juice can help manage stress, boost immunity, and promote respiratory health.'
    },
  ]

  return (
    <>
      <motion.h1 initial='hidden' whileInView='visible' variants={heading} transition={{duration:0.5}} className='text-3xl my-10 font-semibold flex justify-center'>Herbel Juices</motion.h1>
      <motion.div initial='hidden' whileInView='visible' variants={textVariants} className='flex justify-center items-center gap-5'>
      {juice.map((item,key)=>(
          <motion.div variants={textVariants} key={key} className={`shadow-xl rounded-md border-2 w-1/5 border-green-500 p-3`}>
            <img className='w-full rounded-md' src={item.image} alt="" />
            <div className=''>
              <p className='text-2xl py-1 font-semibold'>{item.title}</p>
              <p className='text-lg'>{item.desc}</p>
            </div>
          </motion.div>
      ))}
      </motion.div>
    </>
  )
}

export default Juice
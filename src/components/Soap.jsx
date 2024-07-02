import React from 'react'
import clay from '../assets/clay.jpg'
import khadi from '../assets/khadi.png'
import lav from '../assets/lav.jpeg'
import shea from '../assets/shea.webp'
import {delay, motion} from 'framer-motion'

function Soap() {
  const textVariants = {
    hidden: { opacity: 0, y:-50},
    visible:{opacity: 1, y:0, transition:{staggerChildren:0.1}}
  }
  const heading ={
    hidden:{opacity:0,y:-50},
    visible:{opacity:1,y:0,transition:{delay:0.5, duration:0.5}}
  }
  const soap = [
    {
      title:'Lavender',
      image:lav,
      desc:'Organic coconut oil, organic palm oil, sodium hydroxide, water, organic olive oil, organic hemp oil, organic jojoba oil, lavender extract, salt.'
    },
    {
      title:'Shea Butter',
      image:shea,
      desc:'Sodium cocoate, sodium palmate, sodium olivate, water, glycerin, honey, butyrospermum parkii (shea) butter, fragrance, aloe barbadensis leaf juice, rosemary leaf extract.'
    },
    {
      title:'Khadi Natural',
      image:khadi,
      desc:'Neem oil, tulsi extract, coconut oil, palm oil, olive oil, sodium hydroxide, castor oil,shea butter, glycerin, rose water, sodium hydroxide, alkaline substances with natural preservatives.'
    }, 
    {
      title:'Pink Clay',
      image:clay,
      desc:'Saponified oils of olive, coconut, palm, and shea butter, French pink clay, geranium essential oil, blood orange essential oil.'
    },
  ]

  return (
    <>
      <motion.h1 initial='hidden' whileInView='visible' variants={heading} transition={{duration:0.5}} className='text-3xl my-10 font-semibold flex justify-center'>Herbel Soaps</motion.h1>
      <motion.div initial='hidden' whileInView='visible' variants={textVariants} className='flex justify-center items-center gap-5'>
      {soap.map((item,key)=>(
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

export default Soap
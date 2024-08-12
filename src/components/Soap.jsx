import React from 'react'
import clay from '../assets/soap/clay.jpg'
import khadi from '../assets/soap/khadi.png'
import lav from '../assets/soap/lav.jpeg'
import shea from '../assets/soap/shea.webp'
import s1 from '../assets/soap/s1.jpeg'
import s2 from '../assets/soap/s2.jpeg'
import s3 from '../assets/soap/s3.jpeg'
import s4 from '../assets/soap/s4.jpeg'
import s5 from '../assets/soap/s5.jpeg'
import s6 from '../assets/soap/s6.jpeg'
import { motion} from 'framer-motion'
import ProCard from './ProCard'
import link from '../assets/icons/link.png'
import { useNavigate } from 'react-router-dom'

function Soap() {
  const navigate=useNavigate()

  const textVariants = {
    hidden: { opacity: 0, y:-50},
    visible:{opacity: 1, y:0, transition:{staggerChildren:0.3}}
  }
  const heading ={
    hidden:{opacity:0,scale:0},
    visible:{opacity:1,scale:1,transition:{delay:0.5, duration:0.5}}
  }
  const soap = [
    {
      title:'Lavender',
      image:lav,
      price:'24.00'
    },
    {
      title:'Shea Butter',
      image:shea,
      price:'21.00'
    },
    {
      title:'Khadi Natural',
      image:khadi,
      price:'21.00'
    }, 
    {
      title:'Pink Clay',
      image:clay,
      price:'19.00'
    },
    {
      title:'Lavender',
      image:s1,
      price:'34.00'
    },
    {
      title:'Shea Butter',
      image:s2,
      price:'29.00'
    },
    {
      title:'Khadi Natural',
      image:s3,
      price:'19.00'
    }, 
    {
      title:'Pink Clay',
      image:s4,
      price:'19.00'
    },
    {
      title:'Lavender',
      image:s5,
      price:'19.00'
    },
    {
      title:'Shea Butter',
      image:s6,
      price:'19.00'
    },
  ]

  return (
    <>
      <motion.h1 initial='hidden' whileInView='visible' variants={heading} transition={{duration:0.2,delay:0.2}} className='sm:text-3xl my-4 text-2xl sm:my-10 font-semibold flex justify-center'>Herbel Soaps</motion.h1>
      <div className='mx-2 sm:mx-5 md:mx-10 flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5'>
      {soap.map((item,key)=>(
        <ProCard className='flex-shrink-0 w-fit' key={key} image={item.image} title={item.title} price={item.price}/>
      ))}
      </div>
      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.5}} onClick={()=>navigate('/')} className='hover:underline cursor-pointer text-blue-600 font-serif text-lg my-3 sm:my-5 flex justify-center'><img loading='lazy' className='w-4 h-4 mr-2 mt-[6px]' src={link} alt="link" />Explore &gt;&gt;</motion.span>
    </>
  )
}

export default Soap
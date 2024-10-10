import React from 'react'
import aelojuice from '../assets/juice/aelojuice.jpeg'
import basil from '../assets/juice/basil.jpeg'
import ginger from '../assets/juice/ginger.jpeg'
import mint from '../assets/juice/mint.jpeg'
import j1 from '../assets/juice/j1.jpeg'
import j2 from '../assets/juice/j2.jpeg'
import j3 from '../assets/juice/j3.jpeg'
import j4 from '../assets/juice/j4.jpeg'
import j5 from '../assets/juice/j5.jpeg'
import j6 from '../assets/juice/j6.jpeg'
import {motion} from 'framer-motion'
import ProCard from './ProCard'
import link from '../assets/icons/link.png'
import { useNavigate } from 'react-router-dom'

function Juice() {
  const navigate=useNavigate()

  const heading ={
    hidden:{opacity:0,scale:0},
    visible:{opacity:1,scale:1,transition:{delay:0.5, duration:0.5}}
  }
  const juice = [
    {
      title:'Aloe Vera juice',
      image:aelojuice,
      price:'49.00'
    },
    {
      title:'Ginger Turmeric juice',
      image:ginger,
      price:"19.00"
    },
    {
      title:'Mint Lemon juice',
      image:mint,
      price:'19.00'
    },
    {
      title:'Holy Basil juice',
      image:basil,
      price:'39.00'
    },
    {
      title:'Cabbage juice',
      image:j1,
      price:'49.00'
    },
    {
      title:'Anonymous juice',
      image:j2,
      price:"29.00"
    },
    {
      title:'Bitter groud juice',
      image:j3,
      price:'19.00'
    },
    {
      title:'Turnip juice',
      image:j4,
      price:'39.00'
    },
    {
      title:'Orange juice',
      image:j5,
      price:'29.00'
    },
    {
      title:'Bitter groud juice',
      image:j6,
      price:"21.00"
    },
  ]

  return (
    <>
      <motion.h1 initial='hidden' whileInView='visible' variants={heading} transition={{duration:0.2,delay:0.2}} className='sm:text-3xl my-4 text-2xl sm:my-10 font-semibold flex justify-center'>Herbel Juices</motion.h1>
      <div className='mx-2 sm:mx-5 md:mx-10 flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5'>
      {juice.map((item,key)=>(
        <ProCard className='flex-shrink-0 w-fit' key={key} image={item.image} title={item.title} price={item.price}/>
      ))}
      </div>
      <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.5}} onClick={()=>navigate('/')} className='hover:underline cursor-pointer text-blue-600 font-serif text-base sm:text-lg my-3 sm:my-5 flex justify-center'><img loading='lazy' className='w-4 h-4 mr-2 mt-[3px] sm:mt-[6px]' src={link} alt="link" />Explore &gt;&gt;</motion.span>
    </>
  )
}

export default Juice
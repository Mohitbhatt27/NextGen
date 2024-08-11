import React from 'react'
import banner1 from '../assets/product/banner1.png'
import banner2 from '../assets/product/banner2.png'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

function Banner() {
  const navigate=useNavigate()
  return (
    <motion.div className='mt-[63px]' initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} >
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img loading='lazy' onClick={()=>navigate('/')} src={banner1} className="cursor-pointer d-block w-100" alt="Banner"/>
          </div>
          <div className="carousel-item">
            <img loading='lazy' onClick={()=>navigate('/')} src={banner2} className="cursor-pointer d-block w-100" alt="Banner"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </motion.div>
  )
}

export default Banner
import React from 'react'
import like from '../assets/like.png'
import med from '../assets/med.jpeg'
import line from '../assets/line.png'

function Card() {
  return (
    <div className='flex justify-center my-10 mx-20'>
      <div className='bg-pink-500 rounded-l-md py-5 pl-10 pr-20 flex flex-col justify-center invert'>
        <div>
          <img className='w-7 pb-3 inline-block' src={line} alt="" />
          <span className='pl-3 text-2xl font-semibold'>Why choose us!</span>
        </div>
        <div className='flex '>
          <span className='text-lg px-10'>Our herbal products are crafted using only the finest natural ingredients. We source our herbs from trusted, sustainable farms that adhere to the highest standards of organic farming. This ensures that every product is pure, potent, and free from harmful chemicals.</span>
        </div>
      </div>
      <img className='rounded-r-md inline-block w-96' src={med} alt="" />
    </div>
  )
}

export default Card
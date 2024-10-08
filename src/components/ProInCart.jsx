import React from 'react'
import trash from '../assets/icons/trash.png'

function ProInCart() {
  return (
    <div className='flex font-nunito'>
      <img className='h-10' src={image} alt="" />
      <div className='flex flex-col justify-between'>
        <span className=''>{title}</span>
        <div className='border border-black'>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <div className='flex flex-col justify-between'>
          <img className='h-3' src={trash} alt="" />
          <span>$120</span>
        </div>
      </div>
    </div>
  )
}

export default ProInCart
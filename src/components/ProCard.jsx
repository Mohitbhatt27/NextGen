import React from 'react'

function ProCard({image,title,price,className=''}) {

  return (
    <div className={`${className} bg-gray-100 border w-full flex flex-col items-center rounded-md shadow-xl p-3 pb-4`}>
      <img loading='lazy' className='w-60 h-48 rounded-md object-center object-cover' src={image} alt="" />
      <p className='text-lg py-1 font-semibold'>{title}</p>
      <p className='text-base'>{`$ ${price}`}</p>
      <button className='mt-2 bg-emerald-600 px-3 text-white py-1 text-base sm:text-lg rounded-xl rounded-bl-none rounded-tr-none'>Add to Cart</button>
    </div>
  )
}

export default ProCard
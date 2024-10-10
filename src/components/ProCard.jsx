import React from 'react'

function ProCard({image,title,price,className=''}) {
  function proDetail(data){
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(data);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
  return (
    <div className={`${className} bg-gray-100 border w-fit flex flex-col items-center rounded-md shadow-xl p-3 pb-4`}>
      <img loading='lazy' className='h-52 hover:scale-110 duration-500 aspect-square rounded-md object-center object-cover' src={image} alt="" />
      <p className='text-lg py-1 font-semibold'>{title}</p>
      <p className='text-base'>{`$ ${price}`}</p>
      <button onClick={()=>proDetail({image,title,price})} className='mt-2 bg-emerald-500 hover:bg-emerald-600 px-3 text-white py-1 text-base sm:text-lg rounded-xl rounded-bl-none rounded-tr-none'>Add to Cart</button>
    </div>
  )
}

export default ProCard
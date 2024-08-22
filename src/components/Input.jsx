import React from 'react'

function Input({
  type='text',
  placeholder='',
  className='',
  ...props
}) {
  return (
      <input
        type={type}
        className={` ${className}`}
        {...props}
        placeholder={placeholder}
      />
  )
}

export default Input
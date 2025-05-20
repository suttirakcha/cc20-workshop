import React from 'react'

function CartItem({ item, onDecrease, addToCart, onRemove }) {
  const { id, title, price, quantity } = item;
  return (
    <div className='flex items-center justify-between px-1.5 gap-3'>
      <p className='flex-1 min-w-1/3'>{title.split(" ")[0] + title.split(" ")[1]}</p>
      <div className='flex gap-2 min-w-1/3 justify-center'>
        <button 
          className='bg-yellow-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer'
          onClick={() => onDecrease(id)}
        >
          -
        </button>
        <p>{quantity}</p>
        <button 
          className='bg-yellow-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer'
          onClick={() => addToCart(id, title, price)}
        >
          +
        </button>
      </div>
      <p className='flex-1 text-end'>฿{price}</p>
      <p className='text-red-500 cursor-pointer' onClick={() => onRemove(id)}>Remove</p>
    </div>
  )
}

export default CartItem
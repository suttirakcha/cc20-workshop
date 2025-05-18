import React from 'react'

function CartItem({ item, onDecrease, addToCart }) {
  const { id, title, price, quantity } = item;
  return (
    <div className='flex items-center justify-between px-1.5'>
      <p className='flex-1 min-w-3/5'>{title.split(" ")[0] + title.split(" ")[1]}</p>
      <div className='flex gap-1 w-fit'>
        <button 
          className='border w-5 h-5 flex items-center justify-center cursor-pointer'
          onClick={() => onDecrease(id)}
        >
          -
        </button>
        <button 
          className='border w-5 h-5 flex items-center justify-center cursor-pointer'
          onClick={() => addToCart(id, title, price)}
        >
          +
        </button>
      </div>
      <p className='flex-1 text-end'>{quantity} x ฿{price}</p>
    </div>
  )
}

export default CartItem
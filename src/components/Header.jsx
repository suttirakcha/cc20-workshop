import React from 'react'
import CartCount from './CartCount'

function Header({ itemCount, isCartShowing, setIsCartShowing }) {
  return (
    <div className='flex justify-between h-15 bg-amber-400 px-4 items-center'>
      <div>
        Logo, Brand
      </div>
      <CartCount
        itemCount={itemCount} 
        isCartShowing={isCartShowing} 
        setIsCartShowing={setIsCartShowing}
      />
    </div>
  )
}

export default Header
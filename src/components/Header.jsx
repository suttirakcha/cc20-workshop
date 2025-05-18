import React from 'react'
import CartCount from './CartCount'

function Header({ itemCount }) {
  return (
    <div className='flex justify-between h-15 bg-amber-400'>
      <div>
        Logo, Brand
      </div>
      <CartCount itemCount={itemCount}/>
    </div>
  )
}

export default Header
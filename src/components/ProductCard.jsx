import React, { useState } from 'react'

function ProductCard({ product, addToCart, removeFromCart }) {
  const { id, title, price, description, category, image } = product;
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="card bg-base-100 w-70 shadow-sm pt-3">
      <figure className='h-40 w-2/3 mx-auto'>
        <img src={image} alt={title} className='h-full w-full object-contain'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-sm text-pink-400 text-center'>{category}</p>
        <p 
          className={`${showDesc ? '' : 'line-clamp-2'} cursor-pointer`} 
          onClick={() => setShowDesc(prev => !prev)}
        >
          {description}
        </p>
        <p className='text-slate-700 text-2xl'>฿{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => addToCart(id, title, price)}>Add to Cart</button>
          {/* <button className="btn btn-primary" onClick={() => removeFromCart(id)}>Remove from Cart</button> */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, addToCart, className }) {
  return (
    <div className={`ps-2 ${className}`}>
      <h2 className='text-2xl rounded py-2 text-slate-600'>Product List</h2>
      <div className='flex flex-wrap gap-3'>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
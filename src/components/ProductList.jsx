import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, addToCart }) {
  return (
    <div className='w-2/3 ps-2'>
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
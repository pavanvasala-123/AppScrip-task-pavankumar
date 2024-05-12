import React from 'react'
import '../ProductCard/ProductCard.css';


const ProductCard = ({product}) => {
     
  return (
    <div className='productCard'>
     <div className='image-container'>
      <img src={product.image} alt={product.title}/>
     </div>
     <div className='product-card-details'>
     <p>{product.title.slice(0, 20)}</p>
     <p>Rs {product.price}</p>
     </div>
    </div>
  )
}

export default ProductCard

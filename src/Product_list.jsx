import React from 'react'
import Product_fetch from './Product_fetch';
import WithAuth from './WithAuth';

function Product_list(props) {
    const  {products}=props
    
    
  return (
    <div className='product_container'>
    
        {products && products.length > 0 && products.map((p)=>{
            return(
                <div key={p.id} className='product-wrapper'>
                    <img className='product-image' src={p.images[0]} alt={p.description} />
                    <h1>{p.title}</h1>
                    <h3>Brand : {p.brand}</h3>
                    <h3>Price : {p.price}</h3>
                    <p>{p.description}</p>
                </div>
            )
        })}
      
    </div>
  )
}

export default WithAuth(Product_fetch(Product_list));

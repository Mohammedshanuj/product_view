

import React, { useEffect, useState } from 'react'

function Product_fetch(Component) {
    const NewComponent=(props)=>{
    const[Product,setProduct]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setProduct(data.products)
            
        })

    },[])
  return <Component products={Product}></Component>  ;
  }
  return NewComponent;
  
}

export default Product_fetch

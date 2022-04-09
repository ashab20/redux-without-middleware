import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
  const products = useSelector((state) => state.allProduct.products);

  const rednderProduct = products.map((p) => {
    const {id, title,price,category,image,rating } = p;
    return (
      
      <div key={id} className="product">
        <Link to={`/product/${id}`}>
        <img src={image} alt="Product" width="100%" height="400px"/>
        <h3 className='title'>{title}</h3>
        <h4>Categories :{category}</h4>
        <p className='price'> <span>Price: {price}$ </span>  <span>Rates: {rating.rate}</span> </p>
        </Link>
    </div>
    )
  })

  return (<>{rednderProduct}</>
  )
}

export default Product
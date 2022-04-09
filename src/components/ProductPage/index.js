import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectProducts ,RemovedSelectProducts} from '../../redux/actions/productAction';
import { useSelector } from 'react-redux';
const ProductPage = () => {
    const product = useSelector((state) => state.product);
    const {id, title,price,category,image,rating ,description}= product;
    const { productId } = useParams()
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProduct = async() =>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {console.log({Error:err})})
        dispatch(selectProducts(res.data))
    }

    useEffect(()=> {
        if((product && productId) !== "" ) fetchProduct()
        return () => {
            dispatch(RemovedSelectProducts());
        }
    },[productId]);


    
  return (<>
        {Object.keys(product).length === 0 ? (<div className='lodding'>Loadding....</div>) : (
    <section className='container product-page' key={id}>       
        <div>
            <img src={image} alt={title} width="100%" height="400px"/>
        </div>
        <div className='details'>
            <h3 className='title'>{title}</h3>
            <span className='prices'>{price}</span>
            <p className='description'>  {description}</p>
            <h5 className='categories'>Categories: {category}</h5>
            <p className='price'> <span>Rate: {rating.rate}$ </span>  <span>Quantity:{rating.count} </span> </p>
            <span className='addcart'>ADD TO CART</span>
        </div>
    </section>
     )}
     </>
  )
}

export default ProductPage
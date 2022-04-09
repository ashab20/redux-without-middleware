import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { setProducts } from '../../redux/actions/productAction';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProduct = async() => {
    const res = await axios.get('https://fakestoreapi.com/products').catch((err) => { console.log({Error: err})});
    dispatch(setProducts(res.data));
  }
  useEffect(() => {
    fetchProduct()
  },[fetchProduct]);
  return (
    <div className='grid container'>
      <Product/>
    </div>
  )
}

export default Products
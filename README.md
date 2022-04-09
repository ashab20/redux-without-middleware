# *** REDUX WITHOUT MIDDLEWARE IN REACT***

run the application
```bash
yarn start
```
---

`src/components/basicRedux.js` has the basic understanding of redux. and `src/redux` the folder where i have set redux with redux store and action in syncronize way and connected into the project with help of react-redux.
`src/redux/Store.js`

`store.js`

```javascript
import { createStore } from 'redux';
import mainReducer from './reducer';

const store = createStore(mainReducer,{},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
```

connect redux store in react with help of react-redux

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider} from 'react-redux'
import store from './redux/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
```

`reducer/index.js`

```javascript
import { combineReducers } from 'redux';
import { productReducer,selectedProductReducer }from './productReducer';

const mainReducer = combineReducers({
    allProduct: productReducer,
    product:selectedProductReducer
});

export default mainReducer;
```

`contents/actioTypes.js`

```javascript
export const actionsTypes = {
    SET_PRODUCT: 'SET_PRODUCT',
    SELECT_PRODUCT: 'SELECT_PRODUCT',
    REMOVED_PRODUCT: 'REMOVED_PRODUCT',
}
```

`actions/productActions.js`

```javascript
import {actionsTypes} from '../contents/actionTypes';

export const setProducts = (products) => {
    return {
        type:actionsTypes.SET_PRODUCT,
        payload:products,
    }
}

export const selectProducts = (product) => {
    return {
        type: actionsTypes.SELECT_PRODUCT,
        payload:product
    }
}

export const RemovedSelectProducts = () => {
    return {
        type: actionsTypes.REMOVED_PRODUCT
    }
}
```

_fetching data with axios from a [fakestoreapi](https://fakestoreapi.com/products "fakestoreapi") _
```javascript
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

export default Products;
```

_design the front end part_

```javascript
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
```


---
## OUTPUT
_image1_

!["Fetching Product"](README%20IMAGE/readme-productpages.png)

_image 2_
!["Fetching Product"](README%20IMAGE/reame-singlePages.png)







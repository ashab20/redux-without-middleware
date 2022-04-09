import { combineReducers } from 'redux';
import { productReducer,selectedProductReducer }from './productReducer';


const mainReducer = combineReducers({
    allProduct: productReducer,
    product:selectedProductReducer
});

export default mainReducer;
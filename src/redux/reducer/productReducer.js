import { actionsTypes } from "../contents/actionTypes";


const initialState = {
    products:[]
}

export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case actionsTypes.SET_PRODUCT:
            return {
                ...state,
                products:payload            
            };
        
        default:
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload}) => {
    switch (type) {
        case actionsTypes.SELECT_PRODUCT:
            return {
                ...state,...payload            
            }
        case actionsTypes.REMOVED_PRODUCT:
            return {};
    
        default:
            return state
    }
}



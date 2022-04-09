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
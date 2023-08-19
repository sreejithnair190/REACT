import { PRODUCT_ACTION_TYPES } from "./../actionTypes";

export const setProducts = (products) => ({
    type: PRODUCT_ACTION_TYPES.SET_PRODUCTS,
    payload: products
}) 
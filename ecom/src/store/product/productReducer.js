import { PRODUCT_ACTION_TYPES } from "./../actionTypes";

const INITIAL_STATE = {
    products: {},
};

export const productReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
            return { ...state, products:payload };
        default:
            return state;
    }
};
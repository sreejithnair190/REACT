import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { productReducer } from "./product/productReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
}); 
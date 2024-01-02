import { combineReducers } from "redux";

import { productReducer, cartReducer } from "./productReducer";

const reducer = combineReducers({
    allProduct: productReducer,
    cart: cartReducer
})
export default reducer
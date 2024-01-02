import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [

  ],
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload }
    default:
      return state;
  }
}
export const cartReducer = (state = [], { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, payload];
    case ActionTypes.REMOVE_CART:
      return state.filter(st => st.id != payload.id);
    default:
      return state;
  }
}
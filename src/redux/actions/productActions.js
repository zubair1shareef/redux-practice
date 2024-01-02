import { ActionTypes } from "../constants/action-type"
import storeApi from "../../api/storeApi"


export const fetchProducts = () => {
    return async (dispacth, getState) => {
        const response = await storeApi.get('/products')
        console.log(response)
        dispacth({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
    }
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const RemoveFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_CART,
        payload: product
    }
}
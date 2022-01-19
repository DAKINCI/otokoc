import * as actionTypes from "./actionTypes"

export function addToCart(cartItem){
    return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}

export function removeFromCart(product){
    return {type:actionTypes.REMOVE_FROM_CART,payload:product}
}

export function sumPrice(cartItem){
    return {type:actionTypes.SUM_PRICE_SUCCESS,payload:cartItem}
}


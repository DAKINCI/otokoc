import * as actionTypes from "./actionTypes"

export function getProductSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}
export function createProductSucces(product) {
    return {
        type: actionTypes.CREATE_PRODUCTS_SUCCESS, payload:product
    }
}


export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if(categoryId){
            url = url + "?categoryId="+categoryId 
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductSuccess(result)));
    };
}
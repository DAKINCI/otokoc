import * as actionTypes from "../actions/actionTypes"
import initalState from "./initalState"

export default function productListReducer(state = initalState.products, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state;

    }
}

import {combineReducers} from "redux"
import changeCategoryReducers from './changeCategoryReducers'
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"



const rootReducer = combineReducers({
    changeCategoryReducers,
    categoryListReducer,
    productListReducer,
    cartReducer
})

export default rootReducer;
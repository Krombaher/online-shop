import {combineReducers, legacy_createStore} from "redux";
import {productReducer} from "./ProductReducer";
import {cartReducer} from "./CartReducer";

export let rootReducer = combineReducers( {
    productData: productReducer,
    cartData: cartReducer
})

export let store = legacy_createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

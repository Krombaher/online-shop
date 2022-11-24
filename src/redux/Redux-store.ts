import {combineReducers, legacy_createStore} from "redux";
import {productReducer} from "./ProductReducer";

export let rootReducer = combineReducers( {
    productData: productReducer
})

export let store = legacy_createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

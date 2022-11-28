import {combineReducers, legacy_createStore} from "redux";
import {productReducer} from "./ProductReducer";
import {cartReducer} from "./CartReducer";
import {loadState, saveSate} from "./LocalStoradge";

export let rootReducer = combineReducers( {
    productData: productReducer,
    cartData: cartReducer
})

const persistedState = loadState();
export let store = legacy_createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveSate({
        productData: store.getState().productData,
        cartData: store.getState().cartData
    })
})

export type AppStateType = ReturnType<typeof rootReducer>

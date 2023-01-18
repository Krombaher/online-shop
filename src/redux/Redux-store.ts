import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {productReducer} from "./ProductReducer";
import {cartReducer} from "./CartReducer";
import {loadState, saveSate} from "./LocalStoradge";
import thunk from "redux-thunk";

export let rootReducer = combineReducers( {
    productData: productReducer,
    cartData: cartReducer
})

const persistedState = loadState();
export let store = legacy_createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
    saveSate({
        productData: store.getState().productData,
        cartData: store.getState().cartData
    })
})

export type AppStateType = ReturnType<typeof rootReducer>

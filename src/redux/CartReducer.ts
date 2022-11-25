import {CartDataPageType, CartDataType} from "../Types/Type";

type ActionType = BuyProductAT | RemoveProductAT | OnChangeCountAT
type BuyProductAT = ReturnType<typeof buyProductAC>
type RemoveProductAT = ReturnType<typeof removeProductAC>
type OnChangeCountAT = ReturnType<typeof onChangeCountAC>

let initialState: CartDataPageType = {
    cartItems: [],
    totalPrice: 0
}

export const cartReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = state.cartItems.find(product => product.id === action.product.id)
            if (item) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.product.id
                        ? {
                            ...item,
                            countBy: item.countBy + 1,
                        }
                        : item
                    ),
                    totalPrice: state.totalPrice + action.product.price
                }
            }

            return {
                ...state,
                cartItems: [...state.cartItems, action.product],
                totalPrice: state.totalPrice + action.product.price
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(product => product.id !== action.product.id),
                totalPrice: state.totalPrice - action.product.price * action.product.countBy
            }

        case 'ON_CHANGE_COUNT':
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.product.id
                    ? {
                        ...item,
                        countBy: action.newCountBy
                    } : item
                )
            }

        default:
            return state
    }
}

export const buyProductAC = (product: CartDataType) => {
    return {type: 'ADD_TO_CART', product} as const
}

export const removeProductAC = (product: CartDataType) => {
    return {type: 'REMOVE_FROM_CART', product} as const
}

export const onChangeCountAC = (product: CartDataType, newCountBy: number) => {
    return {type: 'ON_CHANGE_COUNT', product, newCountBy} as const
}

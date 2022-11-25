import {ProductDataPageType, ProductDataType} from "../Types/Type";

type ActionType = GetProductDataAT | SetIsLoadingAT

type GetProductDataAT = ReturnType<typeof getProductDataAC>
type SetIsLoadingAT = ReturnType<typeof setIsLoadingAC>

let initialState: ProductDataPageType = {
    productData: [],
    isLoading: false
}

export const productReducer = (state = initialState, action: ActionType):ProductDataPageType => {
    switch (action.type) {
        case 'GET_PRODUCT_DATA':
            return {...state, productData: [...action.productData]}

        case 'SET_PRODUCT_LOADING':
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

export const getProductDataAC = (productData:ProductDataType[]) => {
    return {type: 'GET_PRODUCT_DATA', productData} as const
}

export const setIsLoadingAC = (isLoading: boolean) => {
    return {type: 'SET_PRODUCT_LOADING', isLoading} as const
}


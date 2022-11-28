import {ProductDataPageType, ProductDataType} from "../Types/Type";

type ActionType = GetProductDataAT | SetIsLoadingAT | SetCurrentPageAT

type GetProductDataAT = ReturnType<typeof getProductDataAC>
type SetIsLoadingAT = ReturnType<typeof setIsLoadingAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>

let initialState: ProductDataPageType = {
    productData: [],
    isLoading: false,
    currentPage: 1
}

export const productReducer = (state = initialState, action: ActionType):ProductDataPageType => {
    switch (action.type) {
        case 'GET_PRODUCT_DATA':
            return {...state, productData: [...action.productData]}

        case 'SET_PRODUCT_LOADING':
            return {...state, isLoading: action.isLoading}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

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

export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage} as const
}


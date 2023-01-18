import {ProductDataPageType, ProductDataType} from "../Types/Type";
import {productAPI} from "../Api/Api";
import {Dispatch} from "react";

export type ActionType = GetProductDataAT | SetIsLoadingAT | SetCurrentPageAT | SetSortPageAT | SetSearchValueAT

type GetProductDataAT = ReturnType<typeof getProductDataAC>
type SetIsLoadingAT = ReturnType<typeof setIsLoadingAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type SetSortPageAT = ReturnType<typeof setSortPageAC>
type SetSearchValueAT = ReturnType<typeof setSearchValueAc>

let initialState: ProductDataPageType = {
    productData: [],
    isLoading: false,
    currentPage: 1,
    sortValue: '',
    searchValue: ''
}

export const productReducer = (state = initialState, action: ActionType): ProductDataPageType => {
    switch (action.type) {
        case 'GET_PRODUCT_DATA':
            return {...state, productData: [...action.productData]}

        case 'SET_PRODUCT_LOADING':
            return {...state, isLoading: action.isLoading}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET_SORT_PAGE':
            return {...state, sortValue: action.sortValue}

        case 'SET_SEARCH_VALUE':
            return {...state, searchValue: action.searchValue}

        default:
            return state
    }
}

export const getProductDataAC = (productData: ProductDataType[]) => {
    return {type: 'GET_PRODUCT_DATA', productData} as const
}

export const setIsLoadingAC = (isLoading: boolean) => {
    return {type: 'SET_PRODUCT_LOADING', isLoading} as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage} as const
}

export const setSortPageAC = (sortValue: string) => {
    return {type: 'SET_SORT_PAGE', sortValue} as const
}

export const setSearchValueAc = (searchValue: string) => {
    return {type: 'SET_SEARCH_VALUE', searchValue} as const
}

export const getCatalogTC = (currentPage: number, sortValue: string, searchValue: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setIsLoadingAC(true))
    productAPI.getCatalog(currentPage, sortValue, searchValue)
        .then(response => {
        dispatch(getProductDataAC(response))
        dispatch(setIsLoadingAC(false))
    })
}


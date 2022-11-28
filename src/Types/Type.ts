//Product type
export type ProductDataType = {
    id: string
    imgURL:string
    brand:string
    name: string
    category:string
    price: number
    countBy:number
}

export type ProductDataPageType = {
    productData: ProductDataType[]
    isLoading:boolean
    currentPage:number
}

//Cart type
export type CartDataType = {
    id: string
    imgURL:string
    brand:string
    name: string
    category:string
    price: number
    countBy:number
}

export type CartDataPageType = {
    cartItems: CartDataType[]
    totalPrice: number
}

//Category type
export type CategoryBtnDataType = {
    name:string | FilterCategoryType
}

//Filter type
export type FilterCategoryType = 'Все товары' | 'Багаж' | 'Катушка' | 'Аксесуары' | 'Платформа' | 'Удилища' | 'Прикормка' | 'Подсачек' | 'Кормушки'
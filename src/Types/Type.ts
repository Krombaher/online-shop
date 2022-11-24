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
}

export type CategoryBtnDataType = {
    name:string | FilterCategoryType
}

export type FilterCategoryType = 'Все товары' | 'Багаж' | 'Катушка' | 'Аксесуары' | 'Платформа' | 'Удилища' | 'Прикормка' | 'Подсачек' | 'Кормушки'
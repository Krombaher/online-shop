import React from "react";
import s from '../scss/components/Categories.module.scss'
import {Select} from "./Select";
import {CategoryBtnDataType, FilterCategoryType} from "../Types/Type";


export type CategoriesPropsType = {
    category:string | FilterCategoryType
    categoryBtnData: CategoryBtnDataType[]
    setFilterProduct: (filter: string | FilterCategoryType) => void
}

export const Categories = (props: CategoriesPropsType) => {
    return (
        <section className={s.categoriesSection}>
            <div className={s.categories}>
                <Select
                    category={props.category}
                    categoryBtnData={props.categoryBtnData}
                    setFilterProduct={props.setFilterProduct}
                />
            </div>
        </section>
    )
}
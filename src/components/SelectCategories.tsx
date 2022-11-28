import s from "../scss/components/Categories.module.scss";
import React from "react";
import {CategoryBtnDataType, FilterCategoryType} from "../Types/Type";

export type SelectCategoriesPropsType = {
    category:string | FilterCategoryType
    categoryBtnData: CategoryBtnDataType[]
    setFilterProduct: (filter: string | FilterCategoryType) => void
    setOpen:(open:boolean) => void
    open:boolean
}

export const SelectCategories = (props: SelectCategoriesPropsType) => {
    let active = props.categoryBtnData.find(el => el.name === props.category)

    const buttonItems = props.categoryBtnData.map((el, i) => {
        const handler = () => {
            props.setFilterProduct(el.name)
            props.setOpen(!props.open)
        }

        return (
            <button
                className={s.categoriesBtn + ' ' + (active === el ? s.categoriesBtnActive : '')}
                key={i}
                onClick={handler}>
                {el.name}
            </button>
        )
    })

    return (
        <div className={s.selectCategories}>
            {buttonItems}
        </div>
    )
}
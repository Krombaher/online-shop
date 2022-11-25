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

    const buttonItems = props.categoryBtnData.map((el, i) => {
        const handler = () => {
            props.setFilterProduct(el.name)
            props.setOpen(!props.open)
        }

        return (
            <button key={i} onClick={handler}>{el.name}</button>
        )
    })

    return (
        <div className={s.selectCategories}>
            {buttonItems}
        </div>
    )
}
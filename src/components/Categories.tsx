import React, {useState} from "react";
import s from '../scss/components/Categories.module.scss'
import {CategoryBtnDataType, FilterCategoryType} from "../Types/Type";
import {GiHamburgerMenu} from "react-icons/gi";
import {SelectCategories} from "./SelectCategories";
import {Select} from "./Select";
import {Search} from "./Search";

export type CategoriesPropsType = {
    category: string | FilterCategoryType
    categoryBtnData: CategoryBtnDataType[]
    setFilterProduct: (filter: string | FilterCategoryType) => void
}

export const Categories = (props: CategoriesPropsType) => {
    const [open, setOpen] = useState<boolean>(true)

    return (
        <section className={s.categoriesSection}>
            <div className={s.categories}>
                <GiHamburgerMenu onClick={() => setOpen(!open)}/>
                {
                    !open &&
                    <SelectCategories
                        category={props.category}
                        categoryBtnData={props.categoryBtnData}
                        setFilterProduct={props.setFilterProduct}
                        setOpen={setOpen}
                        open={open}
                    />
                }
                <Search/>
            </div>
        </section>
    )
}
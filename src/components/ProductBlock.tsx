import React, {useState} from "react";
import s from '../scss/components/ProductBlock.module.scss'
import {CategoryBtnDataType, FilterCategoryType, ProductDataType} from "../Types/Type";
import {Categories} from "./Categories";
import {Product} from "./Product/Product";
import {Skeleton} from "./Product/Skeleton";

export type ProductBlockPropsType = {
    productData: ProductDataType[]
    category: string | FilterCategoryType
    categoryBtnData: CategoryBtnDataType[]
    setFilterProduct: (filter: string | FilterCategoryType) => void
    isLoading: boolean
}

export const ProductBlock = (props: ProductBlockPropsType) => {

    return (
        <main className={s.blockMain}>
            <Categories
                category={props.category}
                categoryBtnData={props.categoryBtnData}
                setFilterProduct={props.setFilterProduct}
            />
            <section className={s.productSection}>
                {
                    props.isLoading ? [...new Array(8)].map((_, i) => <Skeleton key={i}/>)
                        : props.productData.map(obj => {
                            return (
                                <Product key={obj.id} {...obj}/>
                            )
                        })
                }
            </section>
        </main>
    )
}
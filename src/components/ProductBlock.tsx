import React from "react";
import s from '../scss/components/ProductBlock.module.scss'
import {CategoryBtnDataType, FilterCategoryType, ProductDataType} from "../Types/Type";
import {Categories} from "./Categories";
import {Product} from "./Product/Product";
import {Skeleton} from "./Product/Skeleton";
import {Select} from "./Select";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/Redux-store";
import {Pagination} from "./Pagination";

export type ProductBlockPropsType = {
    productData: ProductDataType[]
    category: string | FilterCategoryType
    categoryBtnData: CategoryBtnDataType[]
    setFilterProduct: (filter: string | FilterCategoryType) => void
    setSort:(sort:string) => void
}

export const ProductBlock = (props: ProductBlockPropsType) => {
    const isLoading = useSelector<AppStateType, boolean>(state => state.productData.isLoading)

    return (
        <main className={s.blockMain}>
            <Categories
                category={props.category}
                categoryBtnData={props.categoryBtnData}
                setFilterProduct={props.setFilterProduct}
            />
            <section className={s.productSection}>
                <Select
                    setSort={props.setSort}
                />
                {
                    isLoading ? props.productData.map((_, i) => <Skeleton key={i}/>)
                        : props.productData.map(obj => {
                            return (
                                <Product key={obj.id} {...obj}/>
                            )
                        })
                }
            </section>
            <div>
                <Pagination/>
            </div>
        </main>
    )
}
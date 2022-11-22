import React from "react";
import s from '../scss/components/Product.module.scss'
import {CategoryBtnDataType, FilterCategoryType, ProductDataType} from "../Types/Type";
import {Categories} from "./Categories";
import {TiShoppingCart} from "react-icons/ti";

export type ProductPropsType = {
    productData: ProductDataType[]
    category:string | FilterCategoryType
    categoryBtnData: CategoryBtnDataType[]
    setFilterProduct: (filter: string | FilterCategoryType) => void
}

export const Product = (props: ProductPropsType) => {
    const productDataItems = props.productData.map(el => {
        console.log(el.imgURL)
        return (
            <div key={el.id} className={s.productCard}>
                <img src={el.imgURL} alt={'img'}/>
                <h3>{el.name}</h3>
                <span>Category:{el.category}</span>
                <span>Brand:{el.brand}</span>
                <div>
                    <span>Price:</span>
                    <b>{el.price}$</b>
                </div>
                <button
                    className={s.button}>
                    <TiShoppingCart/>
                </button>
            </div>
        )
    })
    return (
        <main className={s.blockMain}>
            <Categories
                category={props.category}
                categoryBtnData={props.categoryBtnData}
                setFilterProduct={props.setFilterProduct}
            />
            <section className={s.productSection}>
                {productDataItems}
            </section>
        </main>
    )
}
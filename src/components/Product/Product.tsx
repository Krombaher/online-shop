import React from "react";
import s from '../../scss/components/Product.module.scss'
import {TiShoppingCart} from "react-icons/ti";

export type ProductPropsType = {
    id: string
    imgURL:string
    brand:string
    name: string
    category:string
    price: number
    countBy:number
}

export const Product = (props: ProductPropsType) => {
    return (
        <div key={props.id} className={s.productCard}>
            <img src={props.imgURL} alt={'img'}/>
            <h3>{props.name}</h3>
            <span>Category:{props.category}</span>
            <span>Brand:{props.brand}</span>
            <div>
                <span>Price:</span>
                <b>{props.price}$</b>
            </div>
            <button
                className={s.button}>
                <TiShoppingCart/>
            </button>
        </div>
    )
}
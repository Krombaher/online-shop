import React from "react";
import s from '../../scss/components/Product.module.scss'
import {TiShoppingCart} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {buyProductAC} from "../../redux/CartReducer";

export type ProductPropsType = {
    id: string
    imgURL:string
    brand:string
    name: string
    category:string
    price: number
    countBy:number
}

export const Product: React.FC<ProductPropsType> = ({id,imgURL,brand,name,category,price,countBy}) => {
    const dispatch = useDispatch()

    //Create and Add product
    const onClickAddToCart = () => {
        const item = {
            id,
            imgURL,
            brand,
            name,
            category,
            price,
            countBy
        }
        dispatch(buyProductAC(item))
    }

    return (
        <div key={id} className={s.productCard}>
            <img src={imgURL} alt={'img'}/>
            <h3>{name}</h3>
            <span>Category:{category}</span>
            <span>Brand:{brand}</span>
            <div>
                <span>Price:</span>
                <b>{price}$</b>
            </div>
            <button
                className={s.button}
                onClick={onClickAddToCart}
            >
                <TiShoppingCart/>
            </button>
        </div>
    )
}
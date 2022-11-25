import React, {ChangeEvent} from "react";
import {Link} from "react-router-dom";
import s from '../scss/components/Cart.module.scss'
import {IoArrowBackSharp} from "react-icons/io5";
import {CartDataPageType} from "../Types/Type";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/Redux-store";
import {AiOutlineDelete} from "react-icons/ai";
import {onChangeCountAC, removeProductAC} from "../redux/CartReducer";

export const Cart = () => {
    const itemsCart = useSelector<AppStateType, CartDataPageType>(state => state.cartData)
    const dispatch = useDispatch()

    const mappedItem = itemsCart.cartItems.map(el => {

        const onClickRemoveItem = () => {
            dispatch(removeProductAC(el))
        }

        const onChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
            if (+e.currentTarget.value >= 0) {
                dispatch(onChangeCountAC(el , +e.currentTarget.value))
            }
        }

        return (
            <div key={el.id} className={s.cart}>
                <div className={s.imgDesc}>
                    <img src={el.imgURL} alt={'img'}/>
                    <div className={s.cartOption}>
                        <div className={s.description}>
                            <h3>{el.name}</h3>
                            <div>Category:{el.category}</div>
                            <div>Brand:{el.brand}</div>
                            <p>Описание товара</p>
                            <div>Цена:<span>{el.price}$</span></div>
                        </div>
                    </div>
                </div>
                <div className={s.cartControl}>
                    <h4>Укажите количество:</h4>
                    <input value={el.countBy} onChange={onChangeCount} type="number"/>
                    <button onClick={onClickRemoveItem}><AiOutlineDelete/></button>
                </div>
            </div>
        )
    })

    return (
        <section className={s.cartBlock}>
            <Link className={s.link} to={'/'}>
                <IoArrowBackSharp/>
                <span>Вернуться к покупкам</span>
            </Link>
            {mappedItem}
        </section>
    )
}
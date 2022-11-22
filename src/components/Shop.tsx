import React from "react";
import {Link} from "react-router-dom";
import s from '../scss/components/Shop.module.scss'
import {IoArrowBackSharp} from "react-icons/io5";
import {FaSadTear} from "react-icons/fa";

export type CartPropsType = {

}

export const Shop = (props: CartPropsType) => {

    return (
        <section className={s.cartBlock}>
            <Link className={s.link} to={'/'}>
                <IoArrowBackSharp/>
                <span>Вернуться к покупкам</span>
            </Link>
            <h1>Корзина пустая <FaSadTear/></h1>
        </section>
    )
}
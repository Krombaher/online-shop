import React, {useMemo} from "react";
import s from '../scss/components/Header.module.scss'
import {GiShoppingCart} from "react-icons/gi";
import {Link} from "react-router-dom";
import logo from '../img/fp-logo.jpg'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/Redux-store";
import {CartDataPageType} from "../Types/Type";

export const Header = () => {
    const { cartItems, totalPrice } = useSelector<AppStateType, CartDataPageType>((state) => state.cartData)

    let price = cartItems.reduce((sum, current) => sum + current.price * current.countBy, 0)
    let amountItems = cartItems.map(item => item.countBy).reduce((a, b) => a + b, 0)

    return (
        <div className={s.header}>
            <div className={s.headerLogoTitle}>
                <img src={logo} alt='logo'/>
                <div>
                    <h2>FeederPro</h2>
                    <p>Магазин рыболовных товаров</p>
                </div>
            </div>
            <ul className={s.headerShopUser}>
                <div className={s.shopBlock}>
                    <div className={s.shopProductCounter}>{amountItems}</div>
                    <li className={s.shop}>
                        <Link to={'/cart'} className={s.shopLink}>
                            <GiShoppingCart/>
                        </Link>
                    </li>
                </div>
                <div className={s.shopPriceAll}>
                    <span>Общая стоимость:{price}$</span>
                </div>
            </ul>
        </div>
    )
}
import React from "react";
import s from '../scss/components/Header.module.scss'
import {GiShoppingCart} from "react-icons/gi";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerLogoTitle}>
                <img src={'/img/fp-logo.jpg'} alt='logo'/>
                <div>
                    <h2>FeederPro</h2>
                    <p>Магазин рыболовных товаров</p>
                </div>
            </div>
            <ul className={s.headerShopUser}>
                <div className={s.shopBlock}>
                    <div className={s.shopProductCounter}>1</div>
                    <li className={s.shop}>
                        <Link to={'/cart'} className={s.shopLink}>
                            <GiShoppingCart/>
                        </Link>
                    </li>
                </div>
                <div className={s.shopPriceAll}>
                    <span>Общая стоимость:1000 $</span>
                </div>
            </ul>
        </div>
    )
}
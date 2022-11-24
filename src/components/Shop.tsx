import React from "react";
import {Link} from "react-router-dom";
import s from '../scss/components/Shop.module.scss'
import {IoArrowBackSharp} from "react-icons/io5";
import {ProductDataType} from "../Types/Type";

export type CartPropsType = {
    // productData: ProductDataType[]
}

export const Shop = (props: CartPropsType) => {

    // const mappedItem = props.productData.map(el => {
    //
    //     return (
    //         <div key={el.id} className={s.cart}>
    //             <div className={s.imgDesc}>
    //                 <img src={el.imgURL} alt={'img'}/>
    //                 <div className={s.cartOption}>
    //                     <div className={s.description}>
    //                         <h3>{el.name}</h3>
    //                         <div>Category:{el.category}</div>
    //                         <div>Brand:{el.brand}</div>
    //                         <p>Описание товара</p>
    //                         <div>Цена:{el.price}</div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className={s.cartControl}>
    //                 <h4>Укажите количество:</h4>
    //                 {/*<TextField*/}
    //                 {/*    value={el.countBy}*/}
    //                 {/*    onChange={onChangeCountByHandler}*/}
    //                 {/*    style={{width: '70px'}}*/}
    //                 {/*    id="outlined-number"*/}
    //                 {/*    type="number"*/}
    //                 {/*    size={"small"}*/}
    //                 {/*/>*/}
    //                 {/*<button onClick={onClickRemoveHandler}><AiOutlineDelete/></button>*/}
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <section className={s.cartBlock}>
            <Link className={s.link} to={'/'}>
                <IoArrowBackSharp/>
                <span>Вернуться к покупкам</span>
            </Link>
            {/*<h1>Корзина пустая <FaSadTear/></h1>*/}
            {/*{mappedItem}*/}
        </section>
    )
}
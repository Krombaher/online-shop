import React from "react";
import s from '../scss/components/Search.module.scss'
import {FaSearch} from "react-icons/fa";
import {HiSearch} from "react-icons/hi";

export type SearchPropsType = {

}

export const Search = (props: SearchPropsType) => {
    return (
        <section className={s.searchBlock}>
            <input placeholder={'Поиск товара ...'}/>
            <HiSearch/>
        </section>
    )
}
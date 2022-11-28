import React, {ChangeEvent} from "react";
import s from '../scss/components/Search.module.scss'
import {HiSearch} from "react-icons/hi";
import {useDispatch} from "react-redux";
import {setSearchValueAc} from "../redux/ProductReducer";

export const Search = () => {
    const dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValueAc(e.currentTarget.value))
    }

    return (
        <section className={s.searchBlock}>
            <input
                placeholder={'Поиск товара ...'}
                onChange={onChangeHandler}
            />
            <HiSearch/>
        </section>
    )
}
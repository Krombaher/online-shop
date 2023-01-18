import React, {ChangeEvent} from "react";
import s from '../scss/components/Search.module.scss'
import {HiSearch} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValueAc} from "../redux/ProductReducer";
import {AppStateType} from "../redux/Redux-store";
import {ProductDataPageType} from "../Types/Type";

export const Search = () => {
    const { searchValue } = useSelector<AppStateType, ProductDataPageType>(state => state.productData)
    const dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValueAc(e.currentTarget.value))
    }

    return (
        <section className={s.searchBlock}>
            <input
                value={searchValue}
                onBlur={(e) => dispatch(setSearchValueAc(''))}
                placeholder={'Поиск товара ...'}
                onChange={onChangeHandler}
            />
            <HiSearch/>
        </section>
    )
}
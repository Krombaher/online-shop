import React, {useCallback, useEffect, useState} from 'react';
import s from '../src/scss/components/App.module.scss'
import {Header} from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {ProductBlock} from "./components/ProductBlock";
import {Cart} from "./components/Cart";
import {
    CategoryBtnDataType,
    FilterCategoryType,
    ProductDataPageType,
    ProductDataType
} from "./Types/Type";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/Redux-store";
import {getCatalogTC} from "./redux/ProductReducer";
import {useAppDispatch} from "./hooks/react-redux-hooks";

type AppPropsType = {
    categoryBtnData: CategoryBtnDataType[]
}

function App(props: AppPropsType) {
    const [category, setCategory] = useState<string | FilterCategoryType>('Все товары')
    const { currentPage, productData, sortValue, searchValue } = useSelector<AppStateType, ProductDataPageType>(state => state.productData)
    const dispatch = useAppDispatch()
    //Get data from server
    useEffect(() => {
        dispatch(getCatalogTC(currentPage, sortValue, searchValue))
    }, [currentPage, sortValue, searchValue, dispatch])
    //Filter
    const setFilterProduct = useCallback((category: string | FilterCategoryType) => {
        setCategory(category)
    }, [])

    let filteredProduct: ProductDataType[]
    if (category === 'Все товары') filteredProduct = productData
    else filteredProduct = productData.filter(el => el.category === category)

    return (
        <div className={s.container}>
            <Header/>
            <Routes>
                <Route path={'/online-shop'} element={<Navigate to={'/product'}/>}/>
                <Route path={'/'} element={<Navigate to={'/product'}/>}/>
                <Route path='/product' element={
                    <ProductBlock
                        productData={filteredProduct}
                        category={category}
                        categoryBtnData={props.categoryBtnData}
                        setFilterProduct={setFilterProduct}
                    />}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export default App;

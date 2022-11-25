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
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/Redux-store";
import {productAPI} from "./Api/Api";
import {getProductDataAC, setIsLoadingAC} from "./redux/ProductReducer";

type AppPropsType = {
    categoryBtnData: CategoryBtnDataType[]
}

function App(props: AppPropsType) {
    const [category, setCategory] = useState<string | FilterCategoryType>('Все товары')
    const productDataItems = useSelector<AppStateType, ProductDataPageType>(state => state.productData)
    const dispatch = useDispatch()

    //Get data from server
    useEffect(() => {
        dispatch(setIsLoadingAC(true))
        productAPI.getCatalog().then(response => {
            dispatch(getProductDataAC(response))
            dispatch(setIsLoadingAC(false))
        })
    }, [])

    //Filter
    const setFilterProduct = useCallback((category: string | FilterCategoryType) => {
        setCategory(category)
    }, [category])

    let filteredProduct: ProductDataType[]
    if (category === 'Все товары') filteredProduct = productDataItems.productData
    else filteredProduct = productDataItems.productData.filter(el => el.category === category)

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

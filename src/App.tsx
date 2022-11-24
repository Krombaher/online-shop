import React, {useEffect, useState} from 'react';
import s from '../src/scss/components/App.module.scss'
import {Header} from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {ProductBlock} from "./components/ProductBlock";
import {Shop} from "./components/Shop";
import {CategoryBtnDataType, FilterCategoryType, ProductDataPageType, ProductDataType} from "./Types/Type";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/Redux-store";
import {productAPI} from "./Api/Api";
import {getProductDataAC, setIsLoadingAC} from "./redux/ProductReducer";

type AppPropsType = {
    categoryBtnData: CategoryBtnDataType[]
}

function App(props:AppPropsType) {
    const [category, setCategory] = useState<string | FilterCategoryType>('Все товары')
    const productData = useSelector<AppStateType, ProductDataPageType>(state => state.productData)
    const productDispatch = useDispatch()

    useEffect(() => {
        productDispatch(setIsLoadingAC(true))
        productAPI.getCatalog().then(response => {
            productDispatch(getProductDataAC(response))
            productDispatch(setIsLoadingAC(false))
        })
    },[])

    //Filter
    const setFilterProduct = (category: string | FilterCategoryType) => {
        setCategory(category)
    }
    let filteredProduct: ProductDataType[]
    if (category === 'Все товары') filteredProduct = productData.productData
    else filteredProduct = productData.productData.filter(el => el.category === category)

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
                <Route path='/cart' element={<Shop/>}/>
            </Routes>
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import s from '../src/scss/components/App.module.scss'
import {Header} from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {ProductBlock} from "./components/ProductBlock";
import {Shop} from "./components/Shop";
import {CategoryBtnDataType, FilterCategoryType, ProductDataType} from "./Types/Type";

type AppPropsType = {
    categoryBtnData: CategoryBtnDataType[]
}

function App(props:AppPropsType) {
    const [productData, setProductData] = useState<ProductDataType[]>([])
    const [category, setCategory] = useState<string | FilterCategoryType>('Все товары')
    const [isLoading, setIsLoading] = useState<boolean>(true)

    //mockApi
    useEffect(() => {
        fetch('https://637bdcd96f4024eac219cbef.mockapi.io/items-shop')
            .then((res) => res.json())
            .then((arr) => {
                setProductData(arr)
                setIsLoading(false)
            })
    }, [])

    //Filter
    const setFilterProduct = (category: string | FilterCategoryType) => {
        setCategory(category)
    }
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
                        isLoading={isLoading}
                    />}/>
                <Route path='/cart' element={<Shop/>}/>
            </Routes>
        </div>
    );
}

export default App;

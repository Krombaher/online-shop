import React, {useEffect, useState} from 'react';
import s from '../src/scss/components/App.module.scss'
import {Header} from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {Product} from "./components/Product";
import {Shop} from "./components/Shop";
import {CategoryBtnDataType, FilterCategoryType, ProductDataType} from "./Types/Type";

type AppPropsType = {
    categoryBtnData: CategoryBtnDataType[]
}

function App(props:AppPropsType) {
    const [productData, setProductData] = useState<ProductDataType[]>([])
    const [category, setCategory] = useState<string | FilterCategoryType>('Все товары')

    //mocApi
    useEffect(() => {
        fetch('https://637bdcd96f4024eac219cbef.mockapi.io/items-shop')
            .then((res) => res.json())
            .then((arr) => setProductData(arr))
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
                <Route path={'/'} element={<Navigate to={'/product'}/>}/>
                <Route path='/product' element={
                    <Product
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

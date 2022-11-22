import React, {useState, KeyboardEvent} from "react";
import arrow from '../img/chevron-down.svg';
import s from '../scss/components/Select.module.scss'
import {CategoryBtnDataType, FilterCategoryType} from "../Types/Type";

export type SelectPropsType = {
    category:string | FilterCategoryType
    categoryBtnData: CategoryBtnDataType[]
    setFilterProduct: (filter: string | FilterCategoryType) => void
}

export const Select = (props: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [name, setName] = useState(props.category)

    let hoveredItem = props.categoryBtnData.find(i => i.name === name)

    const openBlockHandler = () => {
        setIsOpen(!isOpen)
    }
    const selectValueHandler = (name: string) => {
        props.setFilterProduct(name)
        setName(name)
        setIsOpen(false)
    }

    const mappedOptionValue = props.categoryBtnData.map(el => {
        return (
            <div
                className={s.optionItem + ' ' + (hoveredItem === el ? s.selected : '')}
                onClick={() => selectValueHandler(el.name)}
            >
                {el.name}
            </div>
        )
    })

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.categoryBtnData.length; i++) {
                if (props.categoryBtnData[i] === hoveredItem) {
                    const nextElement = e.key === 'ArrowDown'
                        ? props.categoryBtnData[i + 1]
                        : props.categoryBtnData[i - 1]

                    if (nextElement) {
                        setName(nextElement.name)
                        return;
                    }
                }
            }

            if (!name) setName(props.categoryBtnData[0].name)

        }

        if (e.key === 'Enter' || e.key === 'Escape') setIsOpen(false)

        if (e.key === 'Enter') openBlockHandler()

    }

    return (
        <div className={s.selectBlock}>
            <div className={s.select} onClick={openBlockHandler} onKeyUp={onKeyUp} tabIndex={0}>
                <span>{name}</span>
                <img className={isOpen ? (s.arrow + ' ' + s.rotate) : s.arrow} src={arrow} alt={'arrow'}/>
            </div>
            <div className={s.option}>
                {
                    isOpen && mappedOptionValue
                }
            </div>
        </div>
    );
}
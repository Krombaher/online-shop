import React, {useState, KeyboardEvent} from "react";
import arrow from '../img/chevron-down.svg';
import s from '../scss/components/Select.module.scss'
import {useDispatch} from "react-redux";
import {setSortPageAC} from "../redux/ProductReducer";

const sortName = [
    {name:'сначала дорогие'},
    {name:'сначала дешевые'}
]

export const Select = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [name, setName] = useState('Сортировать')
    const dispatch = useDispatch()

    let hoveredItem = sortName.find(i => i.name === name)

    const openBlockHandler = () => {
        setIsOpen(!isOpen)
    }
    const selectValueHandler = (name: string) => {
        setName(name)
        setIsOpen(false)

        if(name === 'сначала дорогие') {
            dispatch(setSortPageAC('desc'))
        }

        if (name === 'сначала дешевые'){
            dispatch(setSortPageAC('asc'))
        }
    }

    const mappedOptionValue = sortName.map((el,i) => {
        return (
            <div
                key={i}
                className={s.optionItem + ' ' + (hoveredItem === el ? s.selected : '')}
                onClick={() => selectValueHandler(el.name)}
            >
                {el.name}
            </div>
        )
    })

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < sortName.length; i++) {
                if (sortName[i] === hoveredItem) {
                    const nextElement = e.key === 'ArrowDown'
                        ? sortName[i + 1]
                        : sortName[i - 1]

                    if (nextElement) {
                        setName(nextElement.name)
                        return;
                    }
                }
            }

            if (!name) setName(sortName[0].name)

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
import React, {useState, KeyboardEvent} from "react";
import arrow from '../img/chevron-down.svg';
import s from '../scss/components/Select.module.scss'

export type SelectPropsType = {
    setSort:(sort:string) => void
}

const value = [
    {name:'сначала дорогие'},
    {name:'сначала дешевые'}
]

export const Select = (props:SelectPropsType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [name, setName] = useState('Сортировать')

    let hoveredItem = value.find(i => i.name === name)

    const openBlockHandler = () => {
        setIsOpen(!isOpen)
    }
    const selectValueHandler = (name: string) => {
        setName(name)
        setIsOpen(false)

        if(name === 'сначала дорогие') {
            props.setSort('desc')
        }

        if (name === 'сначала дешевые'){
            props.setSort('asc')
        }
    }

    const mappedOptionValue = value.map((el,i) => {
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
            for (let i = 0; i < value.length; i++) {
                if (value[i] === hoveredItem) {
                    const nextElement = e.key === 'ArrowDown'
                        ? value[i + 1]
                        : value[i - 1]

                    if (nextElement) {
                        setName(nextElement.name)
                        return;
                    }
                }
            }

            if (!name) setName(value[0].name)

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
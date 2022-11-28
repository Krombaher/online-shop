import React from "react";
import s from '../scss/components/Pagination.module.scss'
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {setCurrentPageAC} from "../redux/ProductReducer";

export const Pagination = () => {
    const dispatch = useDispatch()
    return (
        <ReactPaginate
            className={s.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => dispatch(setCurrentPageAC(e.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
        />
    )
}
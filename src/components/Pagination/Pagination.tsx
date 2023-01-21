import React from "react";
import styles from "./pagination.module.scss";
import ReactPaginate from "react-paginate";
import { type } from "@testing-library/user-event/dist/type";

type PaginationProps={
  currentPage:number, 
  onChangePage: (page:number)=>void
}

const Pagination  : React.FC <PaginationProps> = ({currentPage, onChangePage }) => {


   return (
     <ReactPaginate  
     className={styles.container}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event)=>onChangePage(event.selected+1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={currentPage-1}
    previousLabel="<"
  />
   )
}




export default Pagination;

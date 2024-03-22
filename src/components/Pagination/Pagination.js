import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import Style from "./Pagination.module.css";
import { ArrowLeft, ArrowRight } from "../../icons";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // Display When Page Size is Greater then total Data
  if (currentPage === 0 || paginationRange.length < 2) {
    return (
      <ul className={[Style.container, className, "row"].join(" ")}>
        <li className={[Style.item, Style.disabled].join(" ")}>
          <ArrowLeft />
        </li>
        <li className={[Style.item, Style.selected].join(" ")}>1</li>
        <li className={[Style.item, Style.disabled].join(" ")}>
          <ArrowRight width="11px" height="11px" />
        </li>
      </ul>
    );
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={[Style.container, className,"row"].join(" ")}>
      <li
        className={[
          Style.item,
          `${currentPage === 1 ? Style.disabled : ""}`,
        ].join(" ")}
        onClick={onPrevious}
      >
        <ArrowLeft />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={[Style.item, Style.dots].join(" ")} key={pageNumber}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={[
              Style.item,
              `${pageNumber === currentPage ? Style.selected : ""}`,
            ].join(" ")}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={[
          Style.item,
          `${currentPage === lastPage ? Style.disabled : ""}`,
        ].join(" ")}
        onClick={onNext}
      >
        <ArrowRight width="11px" height="11px" />
      </li>
    </ul>
  );
};

export default Pagination;

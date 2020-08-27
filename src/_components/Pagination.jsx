import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../_actions';

import { Link } from 'react-router-dom';
import { ProductsPage } from '../ProductsPage';

function getPages(productCount) {
  const remainder = productCount % 10;
  const extraPage = remainder > 0 ? 1 : 0;
  const totalPages = ((productCount - remainder) / 10) + extraPage;
  return totalPages;
}

function getPaginationIndex(pageCount, offset) {
  return pageCount - (pageCount - (Number(offset) / 10)) + 1;
}

export const Pagination = ({ productCount, offset }) => {
  const dispatch = useDispatch();
  const pageCount = getPages(productCount);
  // const paginationIndex = pageCount - (pageCount - (Number(offset) / 10)) + 1;
  const paginationIndex = getPaginationIndex(pageCount, offset);
  const tabCountArray = [];
  const paginationTotalTabs = pageCount > 3 ? 3 : pageCount;
  for (let i = paginationIndex; i < (paginationTotalTabs + paginationIndex); i++) {
    tabCountArray.push(i);
  }

  function handleDownClick(event, offset) {
    offset > 0 ?
      dispatch(productActions.getAll(((event.target.id - 1) * 10).toString())) :
      null;
  }
  function handleUpClick(event, paginationIndex, pageCount) {
    paginationIndex < pageCount ?
      dispatch(productActions.getAll(((event.target.id - 1) * 10).toString())) :
      null;

  }

  const disabledOnMin = offset === "0" ? "disabled" : "";
  const disabledOnMax = paginationIndex >= pageCount ? "disabled" : "";


  if (offset) {

    return (
      <div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className={`page-item ${disabledOnMin}`}>
              <Link
                id={Number(tabCountArray[0]) - 1}
                className={`page-link `}
                to="/products"
                // onClick={(event) => dispatch(productActions.getAll(((event.target.id - 1) * 10).toString()))}
                onClick={(event) => handleDownClick(event, offset)}
              >
                Previous
            </Link>
            </li>
            <li className="page-item disabled" id="1010">
              <p className="page-link">{Number(paginationIndex)} of {pageCount} </p>
            </li>

            <li className={`page-item ${disabledOnMax}`}
              id={tabCountArray[tabCountArray.length - 1] + 1}>
              <Link
                id={Number(tabCountArray[0]) + 1}
                className="page-link"
                to="/products"

                onClick={(event) => handleUpClick(event, paginationIndex, pageCount)}
              >
                Next
            </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  } else {
    return (<p hidden="true"></p>)
  }
}


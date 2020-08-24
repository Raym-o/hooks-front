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

  let tabStyles = ["", "", ""];

  let disabledButton = paginationIndex > 1 ? "" : "disabled";

  console.log(paginationIndex)
  if (offset) {

    return (
      <div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <Link
                id={Number(tabCountArray[0]) - 1}
                className={`page-link ${disabledButton}`}
                to="/products"
                onClick={(event) => dispatch(productActions.getAll(((event.target.id - 1) * 10).toString()))}
              >
                Previous
            </Link>
            </li>
            {tabCountArray.map((tab) => {
              let isActiveTab = "";

              if (tab == paginationIndex) {
                isActiveTab = "active"
              }

              return (
                <li key={tab} id={tab} className={`page-item ${isActiveTab}`}>
                  <Link
                    id={tab}
                    className="page-link"
                    to="/products"
                    onClick={(event) => dispatch(productActions.getAll(((event.target.id - 1) * 10).toString()))}
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}

            {/* <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
            </li> */}

            <li className="page-item" id={tabCountArray[tabCountArray.length - 1] + 1}>
              <Link
                id={Number(tabCountArray[0]) + 1}
                className="page-link"
                to="/products"

                onClick={(event) => dispatch(productActions.getAll(((event.target.id - 1) * 10).toString()))}
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


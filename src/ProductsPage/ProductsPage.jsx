import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productActions } from '../_actions';

import { ProductCard, Pagination, RowContainer } from '../_components';

function ProductsPage() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const { items, productCount, offset } = products;

  useEffect(() => {
    dispatch(productActions.getAll(offset))
  }, [])

  let returnedVal = <p></p>;
  if (items) {
    returnedVal =
      <div className="container">
        <div>
          <div className="card-deck">
            <RowContainer arrayOfProducts={items} />
          </div>
        </div>
      </div>;
  }
  return (
    <div>
      {returnedVal}
      <Pagination
        productCount={productCount}
        offset={offset}
      />
    </div>
  );
}

export { ProductsPage };
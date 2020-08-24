import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productActions } from '../_actions';

import { Pagination } from '../_components';

function ProductsPage() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const { items, productCount, offset } = products;

  useEffect(() => {
    dispatch(productActions.getAll(offset))
  }, [])

  let returnedVal = <p></p>;
  if (items) {
    console.log(productCount);
    console.log(offset);
    returnedVal =
      <div>
        <div>Products Page</div>
        <div>
          {items.map(item => {
            return (
              <p key={item.id}>{item.title}</p>
            )
          })}
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
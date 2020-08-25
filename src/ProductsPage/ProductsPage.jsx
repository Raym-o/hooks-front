import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productActions } from '../_actions';

import { ProductCard, Pagination } from '../_components';

function ProductsPage() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  // console.log('products begin'); console.log(products); console.log('products');
  const { items, productCount, offset } = products;

  useEffect(() => {
    dispatch(productActions.getAll(offset))
  }, [])

  let returnedVal = <p></p>;
  if (items) {
    returnedVal =
      <div>
        <div className="card-deck">
          {items.map(item => {
            return (
              <ProductCard key={item.id} productDetails={item} />
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
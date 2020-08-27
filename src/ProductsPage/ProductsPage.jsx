import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productActions } from '../_actions';
import { productConstants } from '../_constants';

import { ProductCard, Pagination, RowContainer } from '../_components';

import { SingleProductPage } from '../SingleProductPage';

function ProductsPage() {
  const products = useSelector(state => state.products);

  const dispatch = useDispatch();

  const { items, productCount, offset, singleProductId } = products;

  // 1-10 based not 0-9
  const indexOfSingleProduct = singleProductId - Number(offset);

  let singleProduct =
    indexOfSingleProduct ?
      items[indexOfSingleProduct - 1]
      :
      null;


  useEffect(() => {
    console.log(singleProduct);
    dispatch(productActions.getAll(offset))
  }, [])

  let returnedVal = <p></p>;
  if (items && singleProductId) {
    return (
      <div>
        {singleProduct && <SingleProductPage productDetails={singleProduct} />}
        <button onClick={() => {
          dispatch({ type: productConstants.PRODUCTS_STATE_SET_SINGLE, singleProductId: null })
        }} >RESET</button>
      </div>
    )
  }
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
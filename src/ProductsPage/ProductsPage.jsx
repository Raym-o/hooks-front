import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productActions } from '../_actions';

function ProductsPage() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getAll())
  }, [])

  return (
    <div>Products Page</div>
  );
}

export { ProductsPage };
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { productActions } from '../_actions';

function ProductsPage() {
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatchEvent(productActions.getAll())
  })

  return (
    <div>Products Page</div>
  );
}

export { ProductsPage };
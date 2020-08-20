import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productActions } from '../_actions';

function ProductsPage() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const { items, productCount } = products;

  const pageCount = getPages(productCount);

  function getPages(productCount) {
    const remainder = productCount % 10;
    const extraPage = remainder > 0 ? 1 : 0;
    const totalPages = ((productCount - remainder) / 10) + extraPage;
    return totalPages;
  }
  console.log(items);
  useEffect(() => {
    dispatch(productActions.getAll())
  }, [])

  return (
    <div>
      <div>Products Page</div>
      <div>
        {items.map(item => {
          return (
            <p>{item.title}</p>
          )
        })}
      </div>
    </div>

  );
}

export { ProductsPage };
import React from 'react';

import { ProductCard } from './ProductCard';

export const CardRow = ({ productsArray }) => {


  console.log('in card row');
  console.log(productsArray);
  console.log('in card row end');

  const styling = {
    marginBottom: "10px"
  };

  return (
    <div className="row" style={styling}>
      {productsArray.map(productDetails => {
        return (
          <ProductCard key={productDetails.product.id} productDetails={productDetails} />
        )
      })}
    </div>
  );
}

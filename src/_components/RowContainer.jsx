import React from 'react';

import { CardRow } from './CardRow';

export const RowContainer = ({ arrayOfProducts }) => {
  let arrayOfArrays = [];
  const lastIndex = arrayOfProducts.length;
  let countingIndex = 0;

  while (countingIndex < lastIndex) {
    let endIndex = countingIndex + 5 > lastIndex ? lastIndex : countingIndex + 5
    let tempArray = arrayOfProducts.slice(countingIndex, endIndex);
    arrayOfArrays.push(tempArray);
    countingIndex = endIndex;
  }

  return (
    <div>
      {arrayOfArrays.map(ary => {
        return (
          <CardRow productsArray={ary} />
        )
      })}
    </div>
  )
}
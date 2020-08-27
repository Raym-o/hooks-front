import React from 'react';
import { useDispatch } from 'react-redux';

import { productConstants } from '../_constants'

const cardStyle = {
  paddingTop: 5
};
const btnStyle = {
  position: "relative",
  float: "right",
  marginBottom: "5px"
};
const titleStyle = {
  minHeight: '8em'
}


export const ProductCard = ({ productDetails }) => {
  const dispatch = useDispatch();
  const product = productDetails.product;
  const imagesUrls = productDetails.images_urls;

  const handleButtonClick = (event, value = event.target.id) => {
    dispatch({ type: productConstants.PRODUCTS_STATE_SET_SINGLE, singleProductId: value })
  }


  if (product) {
    return (
      <div className="card" style={cardStyle}>
        <div className="col-md-auto">
          <img src={imagesUrls[0] ? imagesUrls[0] : 'public/default_jtg_image.jpeg'} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h6 style={titleStyle} className="card-title">{product.title}</h6>
            <button id={product.id} onClick={(event) => handleButtonClick(event)} style={btnStyle} className="btn btn-light">VIEW</button>
          </div>
        </div >
      </div>
    )
  }
  else {
    return <p key={key}></p>
  }
};


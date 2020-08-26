import React from 'react';

import config from 'config';


function prepUrl(rawString) {
  rawString = rawString.toString().replace('https--', 'http://localhost:3000');
  rawString = rawString.replaceAll('-', '/');
  return rawString;
}


export const ProductCard = ({ productDetails }) => {

  const product = productDetails.product;
  const imagesUrls = productDetails.images_urls;

  if (imagesUrls) {
    console.log("PRODUCT");
    console.log(imagesUrls[0]);
    console.log("PRODUCTENDdddd");
  } else {
    console.log("not loaded blobs yet");
  }

  if (product) {
    return (
      <div className="card" style={{ "height": "50rem", "display": "inline-block" }}>
        <img src={imagesUrls[0]} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div >
    )
  }
  else {
    return <p></p>
  }
};


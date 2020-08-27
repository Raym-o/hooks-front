import React from 'react';

import config from 'config';


export const ProductCard = ({ productDetails }) => {

  const product = productDetails.product;
  const imagesUrls = productDetails.images_urls;

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

  if (product) {
    return (
      <div className="card" style={cardStyle}>
        <div className="col-md-auto">
          <img src={imagesUrls[0] ? imagesUrls[0] : 'public/default_jtg_image.jpeg'} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h6 style={titleStyle} className="card-title">{product.title}</h6>
            <a href="#" style={btnStyle} className="btn btn-light">VIEW</a>
          </div>
        </div >
      </div>
    )
  }
  else {
    return <p key={key}></p>
  }
};


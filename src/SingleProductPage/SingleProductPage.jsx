import React from 'react';
import { useDispatch } from 'react-redux';

function SingleProductPage({ productDetails }) {
  const dispatch = useDispatch();
  const product = productDetails.product;
  const imagesUrls = productDetails.images_urls;

  // const cardStyle = {
  //   paddingTop: 5
  // };

  // const titleStyle = {
  //   minHeight: '8em'
  // }

  const imageStyle = {
    width: '25%',
    paddingTop: '.4rem'
  };

  function handleAddToCartClick() {

  }

  if (product) {
    return (
      <div className="card">
        <div className="col-md-auto">
          <img style={imageStyle} src={imagesUrls[0] ? imagesUrls[0] : 'public/default_jtg_image.jpeg'} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <p>$ {Number(product.price).toFixed(2)}</p>
            <button onClick={handleAddToCartClick} >Add to Cart</button>
          </div>
        </div >
      </div>
    )
  }
  else {
    return <p></p>
  }
}
export { SingleProductPage };

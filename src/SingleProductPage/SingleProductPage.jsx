import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions, productActions } from '../_actions';

function SingleProductPage({ productDetails }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const product = productDetails.product;
  const imagesUrls = productDetails.images_urls;

  // const cardStyle = {
  //   paddingTop: 5
  // };

  // const titleStyle = {
  //   minHeight: '8em'
  // }

  const imageStyle = {
    width: '50%',
    paddingTop: '.4rem'
  };

  function handleAddToCartClick() {
    dispatch(cartActions.updateCart(product));
  }

  function handleRemoveClick() {
    dispatch(cartActions.removeProduct(product.id));
  }

  if (product) {
    console.log('cart'); console.log(cart); console.log('cart');
    return (
      <div className="card">
        <div className="col-md-auto">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-4"><img style={imageStyle} src={imagesUrls[0] ? imagesUrls[0] : 'public/default_jtg_image.jpeg'} className="card-img-top" alt={product.title} /></div>
                <div className="col-lg-6">
                  <div className="row">
                    <h2 className="card-title">{product.title}</h2>
                  </div>
                  <div className="row">
                    <p>$ {Number(product.price).toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <p>{product.description ? product.description : product.title}</p>
              </div>
              <div className="row">
                <button onClick={handleAddToCartClick} >Add to Cart</button>
                <button onClick={handleRemoveClick} >Remove from Cart</button>
              </div>
            </div>
          </div >
        </div>
      </div>
    )
  }
  else {
    return <p></p>;
  }
}
export { SingleProductPage };

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
    width: '25%',
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
          <img style={imageStyle} src={imagesUrls[0] ? imagesUrls[0] : 'public/default_jtg_image.jpeg'} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <p>$ {Number(product.price).toFixed(2)}</p>
            <button onClick={handleAddToCartClick} >Add to Cart</button>
            <button onClick={handleRemoveClick} >Remove from Cart</button>
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

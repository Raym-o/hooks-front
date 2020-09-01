import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartActions } from '../_actions';

import config from 'config';

const imageStyle = { width: "5rem" }


function ProductCard({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveClick(event) {
    event.preventDefault();
    dispatch(cartActions.removeProduct(event.target.id));
  }

  return (
    <div className="row" >
      <div className="col-md-auto">
        <img
          src={cartItem.images_urls[0] ? cartItem.images_urls[0] : config.defaultImagePath}
          style={imageStyle}
        />
      </div>
      <div className="col-sm-1">
        <button
          id={cartItem.product.id}
          className="btn"
          onClick={(event) => handleRemoveClick(event)}
        >X</button>
      </div>
      <div className="col"> <p>{cartItem.product.title} </p></div>
      <div className="col-md-auto"> <p>{Number(cartItem.product.price).toFixed(2)} </p></div>

    </div>
  )
}


function CartPage() {
  const cart = useSelector(state => state.cart);

  {
    if (cart.length > 0) {
      return (
        <div className="container">
          {cart.map(p => {
            return (
              <ProductCard key={p.product.id} cartItem={p} />
            )
          })}
          <div className="row">
            <div className="offset-10 col">
              <button className="btn btn-primary">
                <Link to="/checkout" >Go to Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <h1>Your Cart is Empty</h1>
      )
    }
  }
}
export { CartPage };
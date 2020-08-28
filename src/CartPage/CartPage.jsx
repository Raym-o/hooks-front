import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../_actions';


function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const items = useSelector(state => state.products.items);

  const itemsFromCartWithImages = items.map(item => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == item.product.id) {
        return item;
      }
    }
  }).filter(el => el !== undefined);

  const imageStyle = { width: "5rem" }

  function handleRemoveClick(event) {
    event.preventDefault();
    // alert(event.target.id);
    dispatch(cartActions.removeProduct(event.target.id));
  }

  {
    if (cart.length > 0) {
      return (
        <div className="container">
          {itemsFromCartWithImages.map(p => {
            return (
              <div className="row" key={p.product.id}>
                <div className="col-md-auto">
                  <img
                    src={p.images_urls[0]}
                    style={imageStyle}
                  />
                </div>
                <div className="col-sm-1">
                  <button
                    id={p.product.id}
                    className="btn"
                    onClick={(event) => handleRemoveClick(event)}
                  >X</button>
                </div>
                <div className="col"> <p>{p.product.title} </p></div>
                <div className="col-md-auto"> <p>{Number(p.product.price).toFixed(2)} </p></div>

              </div>
            )
          })}
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col"></div>
            <div className="col-md-auto"><p>total</p></div>
            <div className="col-md-auto"></div>
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
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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


function CheckoutPage() {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.authentication.user);
  const provinces = useSelector(state => state.provinces);
  const { id, f_name, l_name, username, email, updated_at, address } = user;

  const userProvince = provinces.filter(province => province.id === address.province_id);

  {/* city, created_at, id, line_1, line_2, 
              postal_code, province_id, updated_at, user_id */}
  console.log('user'); console.log(userProvince); console.log('user');
  const totalPreTaxes = cart.length > 0 ? cart.map(nestedProduct => {
    const { product } = nestedProduct;
    return Number(product.price);
  }).reduce(function (a, b) { return a + b; })
    : 0;
  // console.log('arrayOfPrices'); console.log(totalPreTaxes); console.log('arrayOfPrices');

  {
    if (cart.length > 0) {
      return (
        <div>
          <div className="container">
            {cart.map(p => {
              return (
                <ProductCard key={p.product.id} cartItem={p} />
              )
            })}
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col"></div>
              <div className="col">
                <div className="row">
                  <div className="col"></div>
                  <p style={{ "float": "right" }}>subtotal:</p>
                  <div className="col-md-auto">
                    <span style={{ "float": "right" }}>
                      {(totalPreTaxes).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col"></div>
                  <p style={{ "float": "right" }}>total:</p>
                  <div className="col-md-auto">
                    <span style={{ "float": "right" }}>
                      ${(totalPreTaxes).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* const { id, f_name, l_name, username, email, updated_at, address } = user; */}
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <h5>Customer Details</h5>
                </div>
                <div className="row">
                  <p className="col">name: </p>
                  <p className="col" style={{ "float": "left" }}>{f_name + ' ' + l_name}</p>
                </div>
                <div className="row">
                  <p className="col">username: </p>
                  <span className="col" style={{ "float": "left" }} >{username}</span>
                </div>
                <div className="row">
                  <p className="col">email: </p>
                  <span className="col" style={{ "float": "left" }}>{email}</span>
                </div>
              </div>
              <div className="col-md-1"></div>
              {/* city, created_at, id, line_1, line_2, 
              postal_code, province_id, updated_at, user_id */}
              <div className="col-md-3">
                <div className="row">
                  <h5>Billing Address</h5>
                </div>
                <div className="row">
                  {/* <p className="col"></p> */}
                  <p className="col">
                    <span className="col" >{address.line_1 + ' ' + (address.line_2 ? address.line_2 : "")}</span>
                  </p>
                </div>
                <div className="row">
                  {/* <p className="col"></p> */}
                  <span className="col" >{address.city}</span>
                </div>
                <div className="row">
                  {/* <p className="col"></p> */}
                  <span className="col" >{userProvince[0].name}</span>
                </div>
                <div className="row">
                  {/* <p className="col"></p> */}
                  <span className="col" >{address.postal_code}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}
export { CheckoutPage };
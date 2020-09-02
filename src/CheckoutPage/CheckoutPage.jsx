import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../_actions';

import config from 'config';
import { checkoutActions } from '../_actions';
import { checkoutConstants } from '../_constants';
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
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.authentication.user);
  const provinces = useSelector(state => state.provinces);
  const { id, f_name, l_name, username, email, updated_at, address } = user;
  const userProvince = provinces.filter(province => province.id === address.province_id);
  const totalPreTaxes = cart.length > 0 ? cart.map(nestedProduct => {
    const { product } = nestedProduct;
    return Number(product.price);
  }).reduce(function (a, b) { return a + b; })
    : 0;
  const total = totalPreTaxes * (1 + Number(userProvince[0].pst_rate) + Number(userProvince[0].hst_rate) + 0.07);
  const [processing, setProcessing] = useState("");

  function handlePurchaseClick() {
    setProcessing("disabled");

    const order = {
      status: checkoutConstants.ORDER_STATUS_UNPAID,
      price: total,
      gst: 0.07,
      pst: Number(userProvince[0].pst_rate),
      hst: Number(userProvince[0].hst_rate),
      user_id: user.id,
    };

    const orderProducts = cart.map(prodAndImages => {
      return ({ id: prodAndImages.product.id, price: prodAndImages.product.price });
    });

    dispatch(checkoutActions.purchaseCartContents(order, orderProducts));
    dispatch(cartActions.emptyCart());
  }



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
                <div className="col">
                  <p style={{ "float": "right" }}>subtotal:</p>
                </div>
                <div className="col">
                  <span style={{ "float": "right" }}>
                    {(totalPreTaxes).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={{ "float": "right" }}>pst: {Number(userProvince[0].pst_rate).toFixed(2)}</p>
                </div>
                <div className="col">
                  <span style={{ "float": "right" }}>
                    {(Number(userProvince[0].pst_rate) * totalPreTaxes).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={{ "float": "right" }}>hst: {Number(userProvince[0].hst_rate).toFixed(2)}</p>
                </div>
                <div className="col">
                  <span style={{ "float": "right" }}>
                    {(Number(userProvince[0].hst_rate) * totalPreTaxes).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={{ "float": "right" }}>gst: 0.07 </p>
                </div>
                <div className="col">
                  <span style={{ "float": "right" }}>
                    {(0.07 * totalPreTaxes).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={{ "float": "right" }}>total:</p>
                </div>
                <div className="col">
                  <span style={{ "float": "right" }}>
                    ${(total).toFixed(2)}
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
                <h5>Customer</h5>
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
            <div className="col-4" />
            <div className="col">
              <div className="row">
                <div className="col"></div>
                <button onClick={handlePurchaseClick} className={`btn btn-primary ${processing}`}>Buy</button>
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

export { CheckoutPage };
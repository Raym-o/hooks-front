import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import banner from '../../public/images/banner.jpg';

import { UserWidget } from '../_components';
import CartIcon from '../../public/Icons/CartIcon';


const listStyle = {
  marginBottom: "0px"
};


function NavigationBar() {
  const user = useSelector(state => state.authentication.user);
  return (
    <div
      style={{
        backgroundImage: 'url(' + banner + ')',
        backgroundSize: 'cover'
      }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Raymo E-Commerce Store </h1>
          </div>
          <div className="col-md-auto">
            <UserWidget />
          </div>
        </div>
      </div>
      <div className="row">
        <ul className="nav nav-tabs" style={listStyle}>
          <li>
            <div className="col">
              <Link className="nav-link" to="/">Landing</Link>
            </div>
          </li>
          <li>
            <div className="col">
              <Link className="nav-link" to="/products" >Products</Link>
            </div>
          </li>
          <li>
            <div className="col">
              <Link className="nav-link" to="/cart" >Cart</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { NavigationBar };

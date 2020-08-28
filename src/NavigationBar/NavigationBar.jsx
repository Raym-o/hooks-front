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
        <div className="d-inline p-2">
          <h1>Raymo E-Commerce Store </h1>
        </div>
        <div className="d-inline p-2">
          <UserWidget />
        </div>
      </div>
      <ul className="nav nav-tabs" style={listStyle}>
        <Link className="nav-link" to="/">Landing</Link>
        <Link className="nav-link" to="/products" >Products</Link>
        <Link className="nav-link" to="/cart" >Cart</Link>
      </ul>
    </div>
  );
}

export { NavigationBar };

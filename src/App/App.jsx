import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions, productActions } from '../_actions';
import { PrivateRoute } from '../_components';

import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { LandingPage } from '../LandingPage';
import { ProfilePage } from '../ProfilePage';
import { ProductsPage } from '../ProductsPage';
import { CartPage } from '../CartPage';
import { CheckoutPage } from '../CheckoutPage';

import { NavigationBar } from '../NavigationBar';

function App() {
  const alert = useSelector(state => state.alert);
  const offset = useSelector(state => state.products.offset)
  const count = useSelector(state => state.products.count)
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
      dispatch(productActions.setOffSet(offset ? offset : "0"));
      dispatch(productActions.getProductCount());

    });
  }, []);

  return (
    <>
      <Router history={history}>
        <NavigationBar />
        <div className="jumbotron">
          <div className="container">
            <div>
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Switch>
                {/* <Route path="/" component={NavigationBar} /> */}
                <Route exact path="/" component={LandingPage} />
                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <PrivateRoute path="/checkout" component={CheckoutPage} />

                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/cart" component={CartPage} />
                <Redirect from="*" to="/" />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export { App };
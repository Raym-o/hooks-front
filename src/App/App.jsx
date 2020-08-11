import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

import { NavigationBar } from '../NavigationBar';
import { LandingPage } from '../LandingPage';
import { ProfilePage } from '../ProfilePage';

function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <>
      <Router history={history}>
        <NavigationBar />
        <div className="jumbotron">
          <div className="container">
            <div className="col-md-8 offset-md-2">
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Switch>
                {/* <Route path="/" component={NavigationBar} /> */}
                <Route exact path="/" component={LandingPage} />
                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
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
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function RegisterPage() {
  const [user, setUser] = useState({
    f_name: '',
    l_name: '',
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.f_name && user.l_name && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="f_name" value={user.f_name} onChange={handleChange} className={'form-control' + (submitted && !user.f_name ? ' is-invalid' : '')} />
          {submitted && !user.f_name &&
            <div className="invalid-feedback">First Name is required</div>
          }
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="l_name" value={user.l_name} onChange={handleChange} className={'form-control' + (submitted && !user.l_name ? ' is-invalid' : '')} />
          {submitted && !user.l_name &&
            <div className="invalid-feedback">Last Name is required</div>
          }
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
          {submitted && !user.username &&
            <div className="invalid-feedback">Username is required</div>
          }
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
          {submitted && !user.password &&
            <div className="invalid-feedback">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
          <Link to="/login" className="btn btn-link">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export { RegisterPage };
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../_actions';


function UserUpdateForm(props) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    f_name: '',
    l_name: '',
    username: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const { f_name, l_name, username, email } = inputs;
  const user = props.user;

  function formFieldChangeHandler(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (f_name && l_name && username && email) {
      dispatch(userActions.update(inputs));
      props.toggle();
    }
  }

  useEffect(() => {
    if (props.toggleState) {
      if (!!user) {
        setInputs(user);
      }
    }
  }, [])


  return (

    <div className="col-lg-8 offset-lg-2">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="f_name">First Name</label>
          <input type="text" className={'form-control' + (submitted && !f_name ? ' is-invalid' : '')} name="f_name" value={f_name ? f_name : ''} onChange={formFieldChangeHandler} id="f_name" ></input>
          {submitted && (!f_name || f_name === '') &&
            <div className="invalid-feedback">Line 1 is required</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="l_name">Last Name</label>
          <input type="text" className="form-control" name="l_name" value={l_name ? l_name : ''} onChange={formFieldChangeHandler} id="l_name" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" value={username ? username : ''} onChange={formFieldChangeHandler} id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className={'form-control' + (submitted && !email ? ' is-invalid' : '')} name="email" value={email ? email : ''} onChange={formFieldChangeHandler} id="email" />
          {submitted && (!email || email === '') &&
            <div className="invalid-feedback">Postal Code is required</div>
          }
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export { UserUpdateForm };
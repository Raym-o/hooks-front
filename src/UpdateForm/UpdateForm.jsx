import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../_actions';

function UpdateForm(props) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    line_1: '',
    line_2: '',
    city: '',
    postal_code: '',
    province_id: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { line_1, line_2, city, postal_code, province_id } = inputs;
  const address = props.user.address;

  function formFieldChangeHandler(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (line_1 && postal_code && province_id) {
      setSubmitted(true);
      const user = {
        ...props.user,
        address: inputs
      };
      const { password_digest, created_at, updated_at, ...userClean } = user;
      dispatch(userActions.updateAddress(userClean));
      props.toggle();
    } else {
      setSubmitted(false);
      alert("missing required fields!");
    }
  }

  useEffect(() => {
    if (props.toggleState) {
      setInputs(address);
    }
  }, [])


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="line_1">Line 1</label>
        <input type="text" className="form-control" name="line_1" value={line_1 ? line_1 : ''} onChange={formFieldChangeHandler} id="line_1" ></input>
      </div>
      <div className="form-group">
        <label htmlFor="line_2">Line 2</label>
        <input type="text" className="form-control" name="line_2" value={line_2 ? line_2 : ''} onChange={formFieldChangeHandler} id="line_2" />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" className="form-control" name="city" value={city ? city : ''} onChange={formFieldChangeHandler} id="city" />
      </div>
      <div className="form-group">
        <label htmlFor="postal_code">Postal Code</label>
        <input type="text" className="form-control" name="postal_code" value={postal_code ? postal_code : ''} onChange={formFieldChangeHandler} id="postal_code" />
      </div>
      <div className="form-group">
        <label htmlFor="province_id">Province</label>
        <input type="text" className="form-control" name="province_id" value={province_id ? province_id : ''} onChange={formFieldChangeHandler} id="province_id" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export { UpdateForm };
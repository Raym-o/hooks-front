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
  // const line_1 = ''; const line_2 = ''; const city = ''; const postal_code = ''; const province_id = '';

  const { line_1, line_2, city, postal_code, province_id } = inputs;
  const address = props.user.address;

  function formFieldChangeHandler(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (line_1 && postal_code && province_id) {
      const user = {
        ...props.user,
        address: inputs
      };
      const { password_digest, created_at, updated_at, ...userParsed } = user;
      dispatch(userActions.updateAddress(userParsed));
      props.toggle();
    }
  }

  useEffect(() => {
    if (props.toggleState) {
      if (!!address) setInputs(address);
    }
  }, [])


  return (

    <div className="col-lg-8 offset-lg-2">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="line_1">Line 1</label>
          <input type="text" className={'form-control' + (submitted && !line_1 ? ' is-invalid' : '')} name="line_1" value={line_1 ? line_1 : ''} onChange={formFieldChangeHandler} id="line_1" ></input>
          {submitted && (!line_1 || line_1 === '') &&
            <div className="invalid-feedback">Line 1 is required</div>
          }
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
          <input type="text" className={'form-control' + (submitted && !postal_code ? ' is-invalid' : '')} name="postal_code" value={postal_code ? postal_code : ''} onChange={formFieldChangeHandler} id="postal_code" />
          {submitted && (!postal_code || postal_code === '') &&
            <div className="invalid-feedback">Postal Code is required</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="province_id">Province</label>
          <input type="text" className={'form-control' + (submitted && !province_id ? ' is-invalid' : '')} name="province_id" value={province_id ? province_id : ''} onChange={formFieldChangeHandler} id="province_id" />
          {submitted && (!province_id || province_id === '') &&
            <div className="invalid-feedback">Province is required</div>
          }
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export { UpdateForm };
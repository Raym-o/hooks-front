import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProfilePage() {
  const user = useSelector(state => state.authentication.user);

  return (
    <div className="container">
      <h1>Profile</h1>
      <ul>
        <li>First Name: {user.f_name}</li>
        <li>Last Name: {user.l_name}</li>
        <li>Username: {user.username}</li>
      </ul>
      <h2>Address</h2>
      {user && user.address ?
        <ul>
          <li>Line 1: {user.address.line_1}</li>
          <li>Line 2: {user.address.line_2}</li>
          <li>City: {user.address.city}</li>
          <li>Postal Code: {user.address.postal_code}</li>
          <li>Province: {user.address.province_id}</li>
        </ul>
        :
        <p>No Address Currently Listed</p>
      }

      <Link to="/">Return to Landing Page</Link>
    </div>
  );
}
export { ProfilePage };
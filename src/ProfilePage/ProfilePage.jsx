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
      <Link to="/">Return to Landing Page</Link>
    </div>
  );
}
export { ProfilePage };
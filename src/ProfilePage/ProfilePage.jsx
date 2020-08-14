import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserUpdateForm } from '../UserUpdateForm';
import { UpdateForm } from '../UpdateForm';

function ProfilePage() {
  const [editingUser, setEditingUser] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const user = useSelector(state => state.authentication.user);

  function toggleEditingUser() {
    setEditingUser(!editingUser);
  }
  function toggleEditingAddress() {
    setEditingAddress(!editingAddress);
  }


  return (
    <div className="container">
      <h1>Profile</h1>
      <button onClick={toggleEditingUser}>
        {editingUser ?
          "Cancel"
          :
          "Edit"}
      </button>
      {!editingUser ?
        <ul>
          <li>First Name: {user.f_name}</li>
          <li>Last Name: {user.l_name}</li>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
        </ul>
        :
        <UserUpdateForm toggle={toggleEditingUser} user={user} toggleState={editingUser} />
      }
      <h2>Address</h2>
      <button onClick={toggleEditingAddress}>
        {user && user.address && !editingAddress ? "Edit"
          :
          user && !user.address && !editingAddress ? "Add"
            :
            "Cancel"
        }</button>
      {user && user.address && !editingAddress ?
        <ul>
          <li>Line 1: {user.address.line_1}</li>
          <li>Line 2: {user.address.line_2}</li>
          <li>City: {user.address.city}</li>
          <li>Postal Code: {user.address.postal_code}</li>
          <li>Province: {user.address.province_id}</li>
        </ul>
        :
        user && editingAddress ?
          <UpdateForm toggle={toggleEditingAddress} user={user} toggleState={editingAddress} />
          :
          <p>No Address Currently Listed</p>
      }

      <Link to="/">Return to Landing Page</Link>
    </div>
  );
}
export { ProfilePage };
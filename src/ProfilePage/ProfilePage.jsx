import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { UserUpdateForm } from '../UserUpdateForm';
import { UpdateForm } from '../UpdateForm';

import { provinceActions } from '../_actions';

function ProfilePage() {
  const dispatch = useDispatch();
  const [editingUser, setEditingUser] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const user = useSelector(state => state.authentication.user);
  const provinces = useSelector(state => state.provinces);
  const userProvince =
    provinces.filter(province => province.id == user.address.province_id);

  function toggleEditingUser() {
    setEditingUser(!editingUser);
  }
  function toggleEditingAddress() {
    setEditingAddress(!editingAddress);
  }

  useEffect(() => {
    dispatch(provinceActions.getAllProvinces());
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col" >
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
              <li>Province: {userProvince[0] && userProvince[0].name}</li>
            </ul>
            :
            user && editingAddress ?
              <UpdateForm
                toggle={toggleEditingAddress}
                user={user}
                toggleState={editingAddress}
                provinces={provinces}
              />
              :
              <p>No Address Currently Listed</p>
          }

        </div>
        <div className="col">
          <h2>Previous Orders</h2>
          {user && user.orders &&
            user.orders.map(order => {
              return (
                <div key={order.id}>
                  <ul className="goober">
                    {Object.entries(order).map(ar => {
                      return (
                        <li>
                          {`${ar[0]}: ${ar[1]}`}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })

          }
        </div>
      </div>
      <Link to="/">Return to Landing Page</Link>
    </div>
  );
}
export { ProfilePage };
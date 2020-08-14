import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UserIcon from '../../public/Icons/UserIcon';

import { history } from '../_helpers';

import { userActions } from '../_actions';

function UserWidget() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authentication.user)
  const [showMenu, setShowMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowMenu(!showMenu);
  }

  function handleLogoutClick() {
    setShowMenu(false);
    history.push('/');
    dispatch(userActions.logout());
  }
  function handleMenuItemClick() {
    setShowMenu(false);
  }


  return (
    <>
      <button
        className="btn btn-secondary dropdown-toggle"
        // data-toggle="dropdown"
        type="button" id="dropdownMenuButton"
        aria-haspopup="true" aria-expanded="false"
        onClick={toggleUserMenu}
      >
        <UserIcon />
        {user ? user.username : "Login"}
      </button>
      {showMenu &&
        <div className="btn-group">
          {user ?
            <button
              className="btn btn-secondary" id="logoutBtn" name="logoutBtn"
              onClick={handleLogoutClick}>Logout
             </button>
            :
            <Link to="/login" onClick={handleMenuItemClick} className="btn btn-secondary" id="login" name="login">
              Log In
              </Link>

          }
          {user &&
            <Link to="/profile" onClick={handleMenuItemClick} className="btn btn-secondary" id="profile" name="profile">Profile</Link>}
        </div>}
    </>
  );
}

export { UserWidget };
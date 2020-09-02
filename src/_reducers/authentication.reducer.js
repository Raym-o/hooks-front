import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    case userConstants.UPDATE_ADDRESS_REQUEST:
      return {
        addressUpdating: true,
        user: action.user
      };
    case userConstants.UPDATE_ADDRESS_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.UPDATE_ADDRESS_FAILURE:
      return {};
    case userConstants.UPDATE_REQUEST:
      return {
        userUpdating: true,
        user: action.user
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.UPDATE_FAILURE:
      return {};
    default:
      return state
  }
}
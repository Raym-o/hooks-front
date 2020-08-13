import { userConstants } from '../_constants';

export function updateAddress(state = {}, action) {
  switch (action.type) {
    case userConstants.UPDATE_ADDRESS_REQUEST:
      return { updatingAddress: true };
    case userConstants.UPDATE_ADDRESS_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.UPDATE_ADDRESS_FAILURE:
      return {};
    default:
      return state
  }
}
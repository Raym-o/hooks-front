import { productConstants } from '../_constants';

export function products(state = {}, action) {
  switch (action.type) {
    case productConstants.PRODUCTS_GETALL_REQUEST:
      return {
        loading: true
      };
    case productConstants.PRODUCTS_GETALL_SUCCESS:
      return {
        items: action.users
      };
    case productConstants.PRODUCTS_GETALL_FAILURE:
      return {
        error: action.error
      };

    default:
      return state
  }
}
import { productConstants } from '../_constants';

export function products(state = {}, action) {
  switch (action.type) {
    case productConstants.PRODUCTS_GETALL_REQUEST:
      return {
        loading: true
      };
    case productConstants.PRODUCTS_GETALL_SUCCESS:
      return {
        items: action.products
      };
    case productConstants.PRODUCTS_GETALL_FAILURE:
      return {
        error: action.error
      };
    case productConstants.PRODUCTS_GET_REQUEST:
      return {

      };

    case productConstants.PRODUCTS_GET_SUCCESS:
      return {};

    case productConstants.PRODUCTS_GET_FAILURE:
      return {};

    default:
      return state
  }
}
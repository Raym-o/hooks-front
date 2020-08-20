import { productConstants } from '../_constants';

export function products(state = {}, action) {
  switch (action.type) {
    case productConstants.PRODUCTS_OFFSET_SET:
      return {
        ...state,
        offset: action.offset
      };
    case productConstants.PRODUCTS_GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case productConstants.PRODUCTS_GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        offset: state.offset,
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
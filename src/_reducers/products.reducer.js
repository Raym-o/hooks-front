import { productConstants } from '../_constants';

export function products(state = {}, action) {
  switch (action.type) {
    case productConstants.PRODUCTS_PAGECOUNT_SET_REQUEST:
      return {
        ...state,
        fetchingCount: true
      };
    case productConstants.PRODUCTS_PAGECOUNT_SET_SUCCESS:
      return {
        ...state,
        fetchingCount: false,
        productCount: action.productCount.count
      };
    case productConstants.PRODUCTS_PAGECOUNT_SET_FAILURE:
      return {
        ...state,
        countError: true
      };
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
        offset: action.offset,
        items: action.products,
        error: null
      };
    case productConstants.PRODUCTS_GETALL_FAILURE:
      return {
        error: action.error
      };
    case productConstants.PRODUCTS_GET_REQUEST:
      return {
        // not implemented yet
      };

    case productConstants.PRODUCTS_GET_SUCCESS:
      return {
        // not implemented yet
      };

    case productConstants.PRODUCTS_GET_FAILURE:
      return {
        // not implemented yet
      };

    case productConstants.PRODUCTS_STATE_SET_SINGLE:
      return {
        ...state,
        singleProductId: action.singleProductId
      };
    case productConstants.PRODUCTS_STATE_CLEAR_SINGLE:
      return {
        ...state,
        singleProductId: null
      };
    default:
      return state
  }
}
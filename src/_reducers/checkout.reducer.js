import { checkoutConstants } from '../_constants';

const initialState = {};

export function checkout(state = initialState, action) {
  switch (action.type) {
    case checkoutConstants.CHECKOUT_PURCHASE_REQUEST:
      return {
        purchasing: true,
        order: action.order,
        products: action.products
      };
    case checkoutConstants.CHECKOUT_PURCHASE_SUCCESS:
      return {
        purchasing: false
      };
    case checkoutConstants.CHECKOUT_PURCHASE_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}
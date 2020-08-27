import { cartConstants } from '../_constants';

let cartStorage = JSON.parse(localStorage.getItem('cart'));
const initialState = cartStorage ? cartStorage : {};

export function cart(state = initialState, action) {
  switch (action.type) {
    case cartConstants.UPDATE_CART:
      return {
        cart: action.cart
      };
    default:
      return state
  }
}
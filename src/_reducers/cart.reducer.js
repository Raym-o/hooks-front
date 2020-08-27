import { cartConstants } from '../_constants';

let cartStorage = JSON.parse(localStorage.getItem('cart'));
const initialState = cartStorage ? cartStorage : [];

export function cart(state = initialState, action) {
  switch (action.type) {
    // code written to allow single product of type, but eventually allow multiples 
    case cartConstants.UPDATE_CART:
      if (!state.includes(action.productUpdate)) {
        return (
          [...state,
          action.productUpdate
          ]
        );
      } else {
        return state;
      };
    case cartConstants.REMOVE_PRODUCT:
      return [
        ...state.filter(p => p.id !== action.id)
      ];
    default:
      return state
  }
}
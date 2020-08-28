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
      let tempState = [...state];

      let returnArray = tempState.map((prod, index) => {
        if (prod === null) { return undefined; }

        let { product, images_urls } = prod;
        if (Number(product.id) !== Number(action.id)) {
          return prod;
        }
      }).filter(entry => entry !== undefined);

      return returnArray;

    default:
      return state
  }
}
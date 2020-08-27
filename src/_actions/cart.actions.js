import { cartConstants } from '../_constants';

export const cartActions = {
  updateCart,
  removeProduct
};

function updateCart(productUpdate) {
  return { type: cartConstants.UPDATE_CART, productUpdate };
}

function removeProduct(id) {
  return { type: cartConstants.REMOVE_PRODUCT, id };
}
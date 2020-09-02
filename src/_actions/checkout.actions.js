import { checkoutConstants } from '../_constants';
import { checkoutService, cartService } from '../_services';

export const checkoutActions = {
  purchaseCartContents
};

function purchaseCartContents(order, products) {
  return dispatch => {
    dispatch(request(order, products));

    checkoutService.purchaseCartContents(order, products)
      .then(
        order => dispatch(success(order, products)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: checkoutConstants.CHECKOUT_PURCHASE_REQUEST, order, products } }
  function success(order, products) { return { type: checkoutConstants.CHECKOUT_PURCHASE_SUCCESS, order } }
  function failure(error) { return { type: checkoutConstants.CHECKOUT_PURCHASE_FAILURE, error } }
}

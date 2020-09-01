import { checkoutConstants } from '../_constants';

export const checkoutActions = {
  purchaseCartContents
};

function purchaseCartContents(order, products) {
  return dispatch => {
    dispatch(request({ order, products }));

    checkoutService.purchaseCartContents(order, products)
      .then(
        order => dispatch(success(order)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: checkoutConstants.CHECKOUT_PURCHASE_REQUEST } }
  function success(order) { return { type: checkoutConstants.CHECKOUT_PURCHASE_SUCCESS, order } }
  function failure(error) { return { type: checkoutConstants.CHECKOUT_PURCHASE_FAILURE, error } }
}

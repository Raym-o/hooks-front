import { checkoutConstants } from '../_constants';

export const checkoutActions = {
  purchaseCartContents
};

function purchaseCartContents() {
  return dispatch => {
    dispatch(request());

    checkoutService.purchaseCartContents(order)
      .then(
        order => dispatch(success(order)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: productConstants.PRODUCTS_GETALL_REQUEST } }
  function success(order) { return { type: productConstants.PRODUCTS_GETALL_SUCCESS, order } }
  function failure(error) { return { type: productConstants.PRODUCTS_GETALL_FAILURE, error } }
}

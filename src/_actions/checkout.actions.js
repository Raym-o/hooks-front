import { checkoutConstants } from '../_constants';
import { checkoutService, cartService } from '../_services';
import { alertActions } from '../_actions';

export const checkoutActions = {
  purchaseCartContents
};

function purchaseCartContents(order, products) {
  return dispatch => {
    dispatch(request(order, products));

    checkoutService.purchaseCartContents(order, products)
      .then(
        order => {
          dispatch(success(order, products))
          dispatch(alertActions.success('Purchase completed. View your orders in the Profile page.'))
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: checkoutConstants.CHECKOUT_PURCHASE_REQUEST, order, products } }
  function success(order, products) { return { type: checkoutConstants.CHECKOUT_PURCHASE_SUCCESS, order } }
  function failure(error) { return { type: checkoutConstants.CHECKOUT_PURCHASE_FAILURE, error } }
}

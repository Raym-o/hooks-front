import { productConstants } from '../_constants';
import { productService } from '../_services';

export const productActions = {
  getById,
  getAll
};

function getById() {
  return dispatch => {
    dispatch(request());

    productService.getById()
      .then(
        product => dispatch(success(product)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: productConstants.PRODUCTS_GET_REQUEST } }
  function success(products) { return { type: productConstants.PRODUCTS_GET_SUCCESS, product } }
  function failure(error) { return { type: productConstants.PRODUCTS_GET_FAILURE, error } }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    productService.getAll()
      .then(
        products => dispatch(success(products)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: productConstants.PRODUCTS_GETALL_REQUEST } }
  function success(products) { return { type: productConstants.PRODUCTS_GETALL_SUCCESS, products } }
  function failure(error) { return { type: productConstants.PRODUCTS_GETALL_FAILURE, error } }
}
import { productConstants } from '../_constants';
import { productService } from '../_services';

export const productActions = {
  getById,
  getAll,
  setOffSet,
  getProductCount
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
  function success(product) { return { type: productConstants.PRODUCTS_GET_SUCCESS, product } }
  function failure(error) { return { type: productConstants.PRODUCTS_GET_FAILURE, error } }
}

function getAll(offset = "0") {
  return dispatch => {
    dispatch(request());

    productService.getAll(offset)
      .then(
        products => dispatch(success(products)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: productConstants.PRODUCTS_GETALL_REQUEST } }
  function success(products) { return { type: productConstants.PRODUCTS_GETALL_SUCCESS, products } }
  function failure(error) { return { type: productConstants.PRODUCTS_GETALL_FAILURE, error } }
}

function setOffSet(offset) {
  return { type: productConstants.PRODUCTS_OFFSET_SET, offset }
}

function getProductCount() {
  return dispatch => {
    dispatch(request());
    productService.getProductCount()
      .then(
        productCount => dispatch(success(productCount)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: productConstants.PRODUCTS_PAGECOUNT_SET_REQUEST } }
  function success(productCount) { return { type: productConstants.PRODUCTS_PAGECOUNT_SET_SUCCESS, productCount } }
  function failure(error) { return { type: productConstants.PRODUCTS_PAGECOUNT_SET_FAILURE, error } }
}
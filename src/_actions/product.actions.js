import { productConstants } from '../_constants';
import { productService } from '../_services';

export const productActions = {
  getById,
  getAll,
  setOffSet,
  getProductCount,
  setSingleProduct
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
        products => dispatch(success(products, offset)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: productConstants.PRODUCTS_GETALL_REQUEST } }
  function success(products, offset) { return { type: productConstants.PRODUCTS_GETALL_SUCCESS, products, offset } }
  function failure(error) { return { type: productConstants.PRODUCTS_GETALL_FAILURE, error } }
}

function setOffSet(offset) {
  return { type: productConstants.PRODUCTS_OFFSET_SET_SINGLE, offset }
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

function setSingleProduct(id) {
  return { type: productConstants.PRODUCTS_STATE_SET_SINGLE, singleProductId: id }
}






import { provinceConstants } from '../_constants';
import { provinceService } from '../_services';

export const provinceActions = {
  getAllProvinces
};

function getAllProvinces() {
  return dispatch => {
    dispatch(request());

    provinceService.getAllProvinces()
      .then(
        provinces => dispatch(success(provinces)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: provinceConstants.PROVINCES_GET_REQUEST } }
  function success(provinces) { return { type: provinceConstants.PROVINCES_GET_SUCCESS, provinces } }
  function failure(error) { return { type: provinceConstants.PROVINCES_GET_FAILURE, error } }
}



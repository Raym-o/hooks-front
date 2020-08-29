import { provinceConstants } from '../_constants';

export function provinces(state = [], action) {
  switch (action.type) {
    case provinceConstants.PROVINCES_GET_REQUEST:
      return [];
    case provinceConstants.PROVINCES_GET_SUCCESS:
      return action.provinces;
    case provinceConstants.PROVINCES_GET_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
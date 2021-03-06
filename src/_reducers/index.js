import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

import { products } from './products.reducer';
import { cart } from './cart.reducer'
import { checkout } from './checkout.reducer';
import { provinces } from './province.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  products,
  cart,
  checkout,
  provinces
});

export default rootReducer;
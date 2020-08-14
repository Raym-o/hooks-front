import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'dongus',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  ));
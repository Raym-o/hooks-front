import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
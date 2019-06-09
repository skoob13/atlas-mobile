import React from 'react';
import { Provider } from 'react-redux';

import createStore from 'redux/createStore';
import Navigation from './navigation';

const { store } = createStore();

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

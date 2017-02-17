import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './configureStore';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

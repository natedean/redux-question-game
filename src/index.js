import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

const defaultState = {
  questions: ['first question', 'second question']
};

let store = createStore(todoApp, defaultState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

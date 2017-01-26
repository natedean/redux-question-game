import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { questions } from './data/questions';
import todoApp from './reducers';
import App from './components/App';
import createLogger from 'redux-logger';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

const logger = createLogger();
const defaultState = { questions };

let store = createStore(todoApp, defaultState, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

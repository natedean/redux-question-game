import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './configureStore';
import { generateAndSetNewQuestion } from './actions';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

// errrmmm, not sure where to do this.
store.dispatch(generateAndSetNewQuestion());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

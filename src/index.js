import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './configureStore';
import { setQuestionsBank, generateAndSetNewQuestion } from './actions';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

console.log('current uri', process.env.REACT_APP_API_URI);

// get questions and init the app...
// eventually, we will want the user to have a list of types of questions they want
// then we can fetch questions based on what the user opts in to.
fetch(`${process.env.REACT_APP_API_URI}/questions`)
  .then(res => res.json())
  .then(questions => {
  store.dispatch(setQuestionsBank(questions));
  store.dispatch(generateAndSetNewQuestion());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

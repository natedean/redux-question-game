import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';
import {questions} from './data/questions';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const defaultState = { questions };

const store = setStoreBasedOnEnv(process.env.NODE_ENV);

export default store;

function setStoreBasedOnEnv(env) {
  if (env === 'development') {
    return createStore(todoApp, defaultState, composeWithDevTools(applyMiddleware(logger, thunk)));
  } else {
    return createStore(todoApp, defaultState, applyMiddleware(thunk));
  }
}

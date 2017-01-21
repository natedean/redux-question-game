import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import answeredQuestionKeys from './answeredQuestionKeys';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  answeredQuestionKeys,
  questions: (state = []) => state
});

export default todoApp;

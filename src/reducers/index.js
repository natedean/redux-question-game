import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import correctAnswerIds from './correctAnswerIds';
import incorrectAnswerIds from './incorrectAnswerIds';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  correctAnswerIds,
  incorrectAnswerIds,
  questions: (state = []) => state
});

export default todoApp;

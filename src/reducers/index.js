import { combineReducers } from 'redux';
import correctAnswerIds from './correctAnswerIds';
import incorrectAnswerIds from './incorrectAnswerIds';
import score from './score';

const todoApp = combineReducers({
  score,
  correctAnswerIds,
  incorrectAnswerIds,
  questions: (state = []) => state
});

export default todoApp;

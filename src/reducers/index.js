import { combineReducers } from 'redux';
import correctAnswerIds from './correctAnswerIds';
import incorrectAnswerIds from './incorrectAnswerIds';
import score from './score';
import userId from './userId';

const todoApp = combineReducers({
  score,
  correctAnswerIds,
  incorrectAnswerIds,
  userId,
  questions: (state = []) => state
});

export default todoApp;

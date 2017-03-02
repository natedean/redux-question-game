import { combineReducers } from 'redux';
import correctAnswerIds from './correctAnswerIds';
import incorrectAnswerIds from './incorrectAnswerIds';
import score from './score';
import currentQuestion from './currentQuestion';
import userId from './userId';
import isLimbo from './isLimbo';
import incorrectAnswerText from './incorrectAnswerText';
import skill from './skill';

const todoApp = combineReducers({
  score,
  currentQuestion,
  correctAnswerIds,
  incorrectAnswerIds,
  userId,
  skill,
  isLimbo,
  incorrectAnswerText,
  questions: (state = []) => state,
});

export default todoApp;

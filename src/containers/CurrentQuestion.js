import { connect } from 'react-redux';
import { correctAnswer, incorrectAnswer, persistAnswer } from '../actions/index';
import Question from '../components/Question';
import shuffle from 'lodash.shuffle';

const mapStateToProps = (state) => {

  // this construct is no good, this 'question' computed prop is now changing everytime ANYTHING in the state changes
  // this is going to have to change to be a thunk from the action { type: 'ANSWER', isCorrect: true|false, questionId }

  const remainingQuestions = Object.keys(state.questions).filter(id => {
    return !state.correctAnswerIds.includes(id) && !state.incorrectAnswerIds.includes(id);
  });

  const currQuestionId = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];

  const currQuestion = Object.assign({},
    state.questions[currQuestionId], { id: currQuestionId }
  );

  const shuffledAnswers = shuffle(currQuestion.answers.slice());

  return {
    question: currQuestion,
    answers: shuffledAnswers
  }
};

const mapDispatchToProps = (dispatch) => ({
  onCorrectAnswer(questionId, milliseconds) {
    dispatch(correctAnswer(questionId));
    dispatch(persistAnswer(questionId, milliseconds, true));
  },
  onIncorrectAnswer(questionId, milliseconds) {
    dispatch(incorrectAnswer(questionId));
    dispatch(persistAnswer(questionId, milliseconds, false));
  }
});

const CurrentQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

export default CurrentQuestion;


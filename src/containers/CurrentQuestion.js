import { connect } from 'react-redux';
import { correctAnswer, incorrectAnswer, persistScoreUpdate } from '../actions/index';
import Question from '../components/Question';
import shuffle from 'lodash.shuffle';

const mapStateToProps = (state) => {
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
  onCorrectAnswer(id) {
    dispatch(correctAnswer(id));
    dispatch(persistScoreUpdate());
  },
  onIncorrectAnswer(id) {
    dispatch(incorrectAnswer(id))
  }
});

const CurrentQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

export default CurrentQuestion;


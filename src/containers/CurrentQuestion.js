import { connect } from 'react-redux';
import { correctAnswer, incorrectAnswer } from '../actions/index';
import Question from '../components/Question';

const mapStateToProps = (state) => {
  const remainingQuestions = state.questions.filter(question => {
    return !state.correctAnswerIds.includes(question.id) && !state.incorrectAnswerIds.includes(question.id);
  });

  window.console.log('remainingQuestions', remainingQuestions);

  const currQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];

  return {
    question: currQuestion
  }
};

const mapDispatchToProps = (dispatch) => ({
  onCorrectAnswer(id) {
    dispatch(correctAnswer(id));
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


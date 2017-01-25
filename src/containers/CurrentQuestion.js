import { connect } from 'react-redux';
import { addCorrectAnswer } from '../actions/index';
import Question from '../components/Question';

const mapStateToProps = (state) => {
  const remainingQuestions = state.questions
    .filter(question => !state.answeredQuestionKeys.includes(question.text));

  return {
    question: remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)]
  }
};

const mapDispatchToProps = (dispatch) => ({
  onClick(id) {
    dispatch(addCorrectAnswer(id));
  }
});

const CurrentQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

export default CurrentQuestion;


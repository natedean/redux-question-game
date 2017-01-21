import { connect } from 'react-redux';
import Question from '../components/Question';

const mapStateToProps = (state) => {
  const remainingQuestions = state.questions
    .filter(question => !state.answeredQuestionKeys.includes(question));

  return {
    question: remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)]
  }
};

const CurrentQuestion = connect(
  mapStateToProps
)(Question);

export default CurrentQuestion;


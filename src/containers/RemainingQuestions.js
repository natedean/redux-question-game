import { connect } from 'react-redux';
import Questions from '../components/Questions';

// THIS IS A TEMP CONTAINER TO DISPLAY ALL REMAINING QUESTIONS

const mapStateToProps = (state) => {
  const remainingQuestions = state.questions
    .filter(question => !state.answeredQuestionKeys.includes(question));

  return {
    questions: remainingQuestions
  }
};

const RemainingQuestions = connect(
  mapStateToProps
)(Questions);

export default RemainingQuestions;

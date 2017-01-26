import { connect } from 'react-redux';
import Questions from '../components/Questions';

// THIS IS A TEMP CONTAINER TO DISPLAY ALL REMAINING QUESTIONS

const mapStateToProps = (state) => {
  const remainingQuestions = state.questions.filter(question => {
    return !state.correctAnswerIds.includes(question.id) && !state.incorrectAnswerIds.includes(question.id);
  });

  return {
    questions: remainingQuestions
  }
};

const RemainingQuestions = connect(
  mapStateToProps
)(Questions);

export default RemainingQuestions;

import { connect } from 'react-redux';
import Questions from '../components/Questions';

const mapStateToProps = (state) => ({
  questions: state.questions
});

const RemainingQuestions = connect(
  mapStateToProps
)(Questions);

export default RemainingQuestions;
import React from 'react';
import { connect } from 'react-redux';
import { answerAndPersist } from '../actions/index';
import Question from '../components/Question';

const mapStateToProps = (state) => ({ question: state.currentQuestion });

const mapDispatchToProps = (dispatch) => ({
  onAnswer(questionId, isCorrect, milliseconds) {
    dispatch(answerAndPersist(questionId, isCorrect, milliseconds));
  }
});

let CurrentQuestion = (props) => {

  if (props.question) {
    return <Question {...props} />
  } else {
    return null;
  }

};

CurrentQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuestion);

export default CurrentQuestion;


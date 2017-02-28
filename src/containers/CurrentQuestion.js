import React from 'react';
import { connect } from 'react-redux';
import { answerAndPersist, generateAndSetNewQuestion } from '../actions/index';
import Question from '../components/Question';

const mapStateToProps = (state) => ({
  question: state.currentQuestion,
  isLimbo: state.isLimbo,
  incorrectAnswerText: state.incorrectAnswerText
});

const mapDispatchToProps = (dispatch) => ({
  onAnswer(questionId, isCorrect, milliseconds, answerText) {
    dispatch(answerAndPersist(questionId, isCorrect, milliseconds, answerText));
  },
  setNewQuestion() {
    dispatch(generateAndSetNewQuestion());
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


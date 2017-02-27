import React, { PropTypes } from 'react';

import AnswerButtons from './AnswerButtons';

const Question = ({ question, answers, onAnswer }) => {

  // fake 1000 millisecond response for now
  const onClick = isCorrect => onAnswer(question.id, isCorrect, 1000);

  return (
    <div>
      <h5>{question.text}</h5>
      <AnswerButtons answers={answers} onClick={onClick} />
    </div>
  )
};

export default Question;

Question.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      isCorrect: PropTypes.bool
    }).isRequired).isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired
};

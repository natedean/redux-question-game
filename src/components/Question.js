import React, { PropTypes } from 'react';

const Question = ({ question, onClick }) => {
  return (
    <span onClick={() => onClick(question.text)}>{question.text}</span>
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
  onClick: PropTypes.func.isRequired
};

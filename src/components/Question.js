import React, { PropTypes } from 'react';

const Question = ({ question, onClick }) => {
  return (
    <span onClick={() => onClick(question)}>{question}</span>
  )
};

export default Question;

Question.propTypes = {
  question: PropTypes.string
};

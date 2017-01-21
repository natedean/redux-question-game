import React, { PropTypes } from 'react';

const Question = ({ question }) => {
  return (
    <span>{question}</span>
  )
};

export default Question;

Question.propTypes = {
  question: PropTypes.string
};
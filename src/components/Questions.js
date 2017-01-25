import React, { PropTypes } from 'react';

const Questions = ({ questions }) => {
  return (
    <ul>
      {questions.map(question =>
        <li key={question.text}>{question.text}</li>
      )}
    </ul>
  )
};

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default Questions;

import React, { PropTypes } from 'react';

const Questions = ({ questions }) => {
  return (
    <ul>
      {questions.map(question =>
        <li key={question}>{question}</li>
      )}
    </ul>
  )
};

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Questions;
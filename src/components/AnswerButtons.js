import React, { PropTypes } from 'react';

const AnswerButtons = ({ answers, onClick }) => {
  return (
    <div>
      { answers.map((answer) =>
        <button style={{ marginLeft: '1em', textTransform: 'none'}}
                key={answer.text} onClick={() => onClick(answer.isCorrect)}>{answer.text}</button>
      )}
    </div>
  )
};

export default AnswerButtons;

AnswerButtons.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired,
  onClick: PropTypes.func
};

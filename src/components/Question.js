import React, { PropTypes } from 'react';

import AnswerButtons from './AnswerButtons';

const Question = ({ question, answers, onCorrectAnswer, onIncorrectAnswer }) => {

  const onClick = isCorrectAnswer => isCorrectAnswer ? onCorrectAnswer(question.id) : onIncorrectAnswer(question.id);

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
  onCorrectAnswer: PropTypes.func.isRequired,
  onIncorrectAnswer: PropTypes.func.isRequired
};

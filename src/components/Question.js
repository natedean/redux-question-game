import React, { PropTypes } from 'react';

const Question = ({ question, onCorrectAnswer, onIncorrectAnswer }) => {

  const onClick = isCorrectAnswer => isCorrectAnswer ? onCorrectAnswer(question.id) : onIncorrectAnswer(question.id);

  return (
    <div>
      <div>{question.text}</div>
      { question.answers.map((answer) =>
        <button key={answer.text} onClick={() => onClick(answer.isCorrect)}>{answer.text}</button>
      )}
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

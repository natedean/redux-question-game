import React, { PropTypes } from 'react';

import AnswerButtons from './AnswerButtons';

const Question = ({ question, isLimbo, incorrectAnswerText, onAnswer, setNewQuestion }) => {

  // fake 1000 millisecond response for now
  const onClick = (isCorrect, answerText) => onAnswer(question.id, isCorrect, 1000, answerText);

  return (
    <div className={isLimbo ? '' : 'animateIn'} >
      <h5>{question.text}</h5>
      <AnswerButtons answers={question.answers} isLimbo={isLimbo} incorrectAnswerText={incorrectAnswerText} onClick={onClick} />
      { isLimbo && <button onClick={setNewQuestion} className="nextBtn">Next</button> }
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

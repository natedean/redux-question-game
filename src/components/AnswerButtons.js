import React, { PropTypes } from 'react';

const AnswerButtons = ({ answers, isLimbo, incorrectAnswerText, onClick }) => {
  return (
    <div>
      { answers.map((answer) =>
            <button style={{ marginLeft: '1em', textTransform: 'none'}}
                  disabled={isLimbo}
                  className={constructClassName(answer, incorrectAnswerText, isLimbo)}
                  key={answer.text} onClick={() => onClick(answer.isCorrect, answer.text)}>{answer.text}</button>
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
  isLimbo: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

function constructClassName(answer, incorrectAnswerText, isLimbo) {
  if (!isLimbo) { return 'answerButton'; }

  if (answer.text === incorrectAnswerText) {
    return `answerButton answerButton--${answer.isCorrect} answerButton--pulse`;
  } else {
    return `answerButton answerButton--${answer.isCorrect}`;
  }
}

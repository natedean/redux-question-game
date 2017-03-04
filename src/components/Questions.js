import React, { PropTypes } from 'react';

const Questions = ({questions, currentQuestionId}) => {


  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Difficulty</td>
            <td>CorrectnessIndex</td>
            <td>SpeedIndex</td>
            <td>Text</td>
          </tr>
        </thead>
        <tbody>
          {questions.map(question =>
            <tr key={question.id}>
              <td>{question.difficulty}</td>
              <td>{question.correctnessIndex}</td>
              <td>{question.speedIndex}</td>
              <td>{question.text}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )

};

export default Questions;

Questions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string
  })).isRequired,
  currentQuestionId: PropTypes.string.isRequired
};

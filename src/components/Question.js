import React, { Component, PropTypes } from 'react';
import PropShapes from '../constants/propShapes';
import AnswerButtons from './AnswerButtons';

class Question extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.milliseconds = 0;
  }

  onClick(isCorrect, answerText) {
    this.props.onAnswer(this.props.question.id, isCorrect, this.milliseconds, answerText)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.milliseconds = this.milliseconds + 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question.id !== nextProps.question.id) {
      this.milliseconds = 0;
    }
  }

  render() {
    const { question, isLimbo, incorrectAnswerText, setNewQuestion } = this.props;

    return (
      <div className={isLimbo ? '' : 'fadeIn'} >
        <h5>{question.text}</h5>
        <AnswerButtons
          answers={question.answers}
          isIncorrectLimbo={isLimbo && !!incorrectAnswerText}
          incorrectAnswerText={incorrectAnswerText}
          onClick={this.onClick}
        />
        { (isLimbo && incorrectAnswerText) && <div className="fadeIn">Incorrect.</div> }
        { (isLimbo && incorrectAnswerText) && <button onClick={setNewQuestion} className="nextBtn">Next</button> }
      </div>
    )
  }
}

export default Question;

Question.propTypes = {
  question: PropTypes.shape(PropShapes.question).isRequired,
  onAnswer: PropTypes.func.isRequired
};

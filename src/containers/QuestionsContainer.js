import React from 'react';
import { connect } from 'react-redux';
import Questions from '../components/Questions';

const mapStateToProps = (state) => ({
  currentQuestionId: state.currentQuestion ? state.currentQuestion.id : null,
  questions: state.questions ? getSortedQuestions(state.questions) : null
});

let QuestionsContainer = (props) => {
  return (
    <div className="questionsContainer" style={{marginTop: '5rem'}}>
      {(props.questions && props.questions.length && props.currentQuestionId) && <Questions {...props} />}
    </div>
  );
};

QuestionsContainer = connect(
  mapStateToProps
)(QuestionsContainer);

export default QuestionsContainer;

function getSortedQuestions(questionMap) {
  return Object.keys(questionMap).map(key => questionMap[key]).sort((a, b) => a.difficulty - b.difficulty);
}


import { v4 } from 'uuid';
import shuffle from 'lodash.shuffle';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const persistAnswer = (questionId, isCorrect, milliseconds) => (dispatch, getState) => {
  return fetch('https://api.guitarthinker.com/user/answer', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: getState().userId,
      isCorrect,
      questionId,
      milliseconds
    })
  })
    .then(res => res.json())
    .then(res => {
      if (!getState().userId) {
        dispatch({ type: 'LOAD_USER', user: res });
      }
    })
    .catch(err => dispatch({ type: 'UPDATE_USER_ERROR' }));
};

export const answer = (id, isCorrect, milliseconds) => ({
  type: 'ANSWER',
  id,
  isCorrect
});

export const setQuestion = (question) => ({ type: 'SET_QUESTION', question });

export const generateAndSetNewQuestion = () => (dispatch, getState) => {
  console.log('doing stuff')
  // this construct is no good, this 'question' computed prop is now changing everytime ANYTHING in the state changes
  // this is going to have to change to be a thunk from the action { type: 'ANSWER', isCorrect: true|false, questionId }
  const state = getState();

  const remainingQuestions = Object.keys(state.questions).filter(id => {
    return !state.correctAnswerIds.includes(id) && !state.incorrectAnswerIds.includes(id);
  });

  const currQuestionId = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];

  const currQuestion = Object.assign({},
    state.questions[currQuestionId], { id: currQuestionId }
  );

  const shuffledAnswers = shuffle(currQuestion.answers.slice());

  const newQuestion = Object.assign({}, currQuestion, { answers: shuffledAnswers });

  dispatch(setQuestion(newQuestion));
};

export const setIncorrectAnswerText = (text) => ({ type: 'SET_INCORRECT_ANSWER_TEXT', text });

export const answerAndPersist = (id, isCorrect, milliseconds, answerText) => dispatch => {
  dispatch(answer(id, isCorrect, milliseconds));
  dispatch(persistAnswer(id, isCorrect, milliseconds));

  if (isCorrect) {
    dispatch(generateAndSetNewQuestion());
  } else {
    dispatch(setIncorrectAnswerText(answerText));
  }
};

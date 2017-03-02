import shuffle from 'lodash.shuffle';

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
    setTimeout(() => {
      dispatch(generateAndSetNewQuestion());
    }, 200);
  } else {
    dispatch(setIncorrectAnswerText(answerText));
  }
};

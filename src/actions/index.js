import { v4 } from 'uuid';

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

export const answerAndPersist = (id, isCorrect, milliseconds) => dispatch => {
  dispatch(answer(id, isCorrect, milliseconds));
  dispatch(persistAnswer(id, isCorrect, milliseconds));
};


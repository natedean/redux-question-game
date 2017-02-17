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

export const correctAnswer = (id) => ({
  type: 'CORRECT_ANSWER',
  payload: id
});

export const persistScoreUpdate = () => dispatch =>
  fetch('http://localhost:3001/user/update/gt_user', { method: 'POST' })
    .then(res => dispatch({ type: 'AWESOME_SAUCE' }))
    .catch(err => dispatch({ type: 'UPDATE_USER_ERROR' }));

export const incorrectAnswer = (id) => ({
  type: 'INCORRECT_ANSWER',
  payload: id
});


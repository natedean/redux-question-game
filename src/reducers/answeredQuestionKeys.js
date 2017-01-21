const answeredQuestionKeys = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CORRECT_ANSWER':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default answeredQuestionKeys;
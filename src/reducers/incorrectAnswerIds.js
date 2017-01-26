const incorrectAnswerIds = (state = [], action) => {
  switch(action.type) {
    case 'INCORRECT_ANSWER':
      return [...state, action.payload];
    case 'RESET_ANSWERS':
      return [];
    default:
      return state;
  }
};

export default incorrectAnswerIds;

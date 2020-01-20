
const specialtyReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_SPECIAL':
      return action.payload;
    default:
      return state;
  }
};

export default specialtyReducer;

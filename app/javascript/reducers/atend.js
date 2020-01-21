
const atendReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_ATEND':
      return action.payload;
    default:
      return state;
  }
};

export default atendReducer;

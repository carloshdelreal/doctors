
const doctorReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default doctorReducer;

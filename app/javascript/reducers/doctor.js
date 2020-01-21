
const doctorReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_DOCTORS':
      return action.payload;
    default:
      return state;
  }
};

export default doctorReducer;

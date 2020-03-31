
const userBookingsReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_BOOKINGS':
      return action.payload;
    default:
      return state;
  }
};

export default userBookingsReducer;

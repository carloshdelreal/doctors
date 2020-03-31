import { combineReducers } from 'redux';
import specialtyReducer from './specialty';
import specialtyDictReducer from './specialtyDict';
import doctorsReducer from './doctor';
import specialtySelectReducer from './selectSpecialty';
import atendReducer from './atend';
import userReducer from './user';
import userBookingsReducer from './userBookings';

const generalReducer = combineReducers({
  doctors: doctorsReducer,
  specialties: specialtyReducer,
  specialtyDict: specialtyDictReducer,
  specialtySelected: specialtySelectReducer,
  atends: atendReducer,
  userData: userReducer,
  userBookings: userBookingsReducer,
});

export default generalReducer;

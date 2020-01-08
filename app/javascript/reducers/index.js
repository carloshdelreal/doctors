import { combineReducers } from 'redux';
import specialtyReducer from './specialty';
import doctorsReducer from './doctor';
import specialtySelectReducer from './selectSpecialty';

const generalReducer = combineReducers({
  doctors: doctorsReducer,
  specialties: specialtyReducer,
  specialtySelected: specialtySelectReducer,
});

export default generalReducer;

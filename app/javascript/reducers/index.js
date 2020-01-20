import { combineReducers } from 'redux';
import specialtyReducer from './specialty';
import doctorsReducer from './doctor';
import specialtySelectReducer from './selectSpecialty';
import atendReducer from './atend';

const generalReducer = combineReducers({
  doctors: doctorsReducer,
  specialties: specialtyReducer,
  specialtySelected: specialtySelectReducer,
  atends: atendReducer,
});

export default generalReducer;

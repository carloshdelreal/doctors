import { combineReducers } from 'redux';
import specialtyReducer from './filter';
import doctorsReducer from './doctor';

const generalReducer = combineReducers({
  doctors: doctorsReducer,
  specialty: specialtyReducer,
});

export default generalReducer;

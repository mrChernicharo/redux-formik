import { combineReducers } from 'redux';
import patientsReducer from './patients';
import professionalsReducer from './professionals';

const rootReducer = combineReducers({
	patients: patientsReducer,
	professionals: professionalsReducer,
});

export default rootReducer;

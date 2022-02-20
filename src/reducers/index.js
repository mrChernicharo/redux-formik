import { combineReducers } from 'redux';
import patients from './patients';
import professionals from './professionals';

const rootReducer = combineReducers({
	patients,
	professionals,
});

export default rootReducer;
